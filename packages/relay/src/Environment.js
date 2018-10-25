// @flow

import { DeviceInfo } from '@kiwicom/mobile-localization';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
  createOperationSelector,
} from 'relay-runtime';
import { AsyncStorage } from 'react-native';
import fetchWithRetries from '@mrtnzlml/fetch';

import ConnectionManager from './ConnectionManager';

type FetcherResponse = {|
  +data: Object,
  +errors?: $ReadOnlyArray<Object>,
|};

const ASYNC_STORE_KEY = '@OfflineStore:key';
const GRAPHQL_URL = 'https://graphql.kiwi.com/';

const store = new Store(new RecordSource());

async function fetchFromTheNetwork(
  networkHeaders,
  operation,
  variables,
  observer,
) {
  try {
    const fetchResponse = await fetchWithRetries(GRAPHQL_URL, {
      method: 'POST',
      headers: networkHeaders,
      body: JSON.stringify({
        query: operation.text, // TODO: fetch persisted queries instead (based on operation.id)
        variables,
      }),
      fetchTimeout: 15000,
      retryDelays: [1000, 3000],
    });

    const jsonResponse = await fetchResponse.json();
    if (jsonResponse.errors) {
      jsonResponse.errors.forEach(error => console.warn(error));
    }

    observer.next(jsonResponse);
    observer.complete();
  } catch (error) {
    // Handle error from fetch, unless we will see loader forever
    observer.error(error);
    observer.complete();
    console.warn(error);
  }
  AsyncStorage.setItem(ASYNC_STORE_KEY, JSON.stringify(store.getSource()));
}

const handleNoNetworkNoCachedResponse = observer => {
  // If not we are stuck on loader forever.
  observer.error({ message: 'No network' });
  observer.complete();
};

const asyncStoreRead = async (observer, operation, variables) => {
  try {
    const content = await AsyncStorage.getItem(ASYNC_STORE_KEY);
    if (content === null) {
      return handleNoNetworkNoCachedResponse(observer);
    }
    store.publish(new RecordSource(JSON.parse(content)));
    const operationSelector = createOperationSelector(operation, variables);

    if (store.check(operationSelector.root)) {
      // This seems to work, but if we discover some problems with it
      // Maybe we should rather return here
      // I posted a question about it here: https://discordapp.com/channels/102860784329052160/102861057189490688
      const root = {
        ...operationSelector.root,
        node: {
          ...operationSelector.root.node,
          selections: operationSelector.root.node.selections.filter(
            selection => selection.kind !== 'LinkedHandle',
          ),
        },
      };

      observer.next(store.lookup(root));
      observer.complete();
    } else {
      handleNoNetworkNoCachedResponse(observer);
    }
  } catch (error) {
    //   // AsyncStorage read wasn't successful - nevermind
    console.warn('error', error);
  }
};

export default function createEnvironment(accessToken: string = '') {
  const networkHeaders: Object = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': DeviceInfo.getLocaleUnderscored(),
  };

  if (accessToken) {
    networkHeaders.authorization = accessToken;
  }

  const fetchQuery = (operation, variables): Promise<FetcherResponse> => {
    return Observable.create(observer => {
      if (ConnectionManager.isConnected()) {
        fetchFromTheNetwork(networkHeaders, operation, variables, observer);
      } else if (operation.operationKind !== 'mutation') {
        // We have some issue with the store and connections, it causes the app to crash because of some race condition.
        // For now let's just use this appreach if we are offline
        // try to read content from the cache and use it if possible
        asyncStoreRead(observer, operation, variables);
      }
    });
  };

  return new Environment({
    network: Network.create(fetchQuery),
    store,
  });
}
