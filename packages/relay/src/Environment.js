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

import ConnectionManager from './ConnectionManager';

type FetcherResponse = {|
  +data: Object,
  +errors?: $ReadOnlyArray<Object>,
|};

const ASYNC_STORE_KEY = '@OfflineStore:key';
const GRAPHQL_URL = 'https://graphql.kiwi.com/';

const store = new Store(new RecordSource());

function fetchFromTheNetwork(networkHeaders, operation, variables, observer) {
  fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: networkHeaders,
    body: JSON.stringify({
      query: operation.text, // TODO: fetch persisted queries instead (based on operation.id)
      variables,
    }),
  })
    .then(fetchResponse => fetchResponse.json())
    .then(jsonResponse => {
      if (jsonResponse.errors) {
        jsonResponse.errors.forEach(error => console.warn(error));
      }
      observer.next(jsonResponse);
      observer.complete();
    })
    .then(() => {
      AsyncStorage.setItem(
        ASYNC_STORE_KEY,
        JSON.stringify(store.getSource()),
      ).catch(error => {
        // AsyncStorage write wasn't successful - nevermind
        console.warn(error);
      });
    });
}

export default function createEnvironment(accessToken: string = '') {
  const networkHeaders: Object = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': DeviceInfo.getLocaleUnderscored(),
  };

  if (accessToken) {
    networkHeaders.authorization = accessToken;
  }

  const fetchQuery = (
    operation,
    variables,
    cacheConfig,
  ): Promise<FetcherResponse> => {
    return Observable.create(observer => {
      if (cacheConfig.force === true && ConnectionManager.isConnected()) {
        return fetchFromTheNetwork(
          networkHeaders,
          operation,
          variables,
          observer,
        );
      }

      if (!ConnectionManager.isConnected()) {
        // We have some issue with the store and connections, it causes the app to crash because of some race condition.
        // For now let's just use this appreach if we are offline
        // try to read content from the cache and use it if possible
        AsyncStorage.getItem(ASYNC_STORE_KEY)
          .then(content => {
            if (content !== null) {
              store.publish(new RecordSource(JSON.parse(content)));
              const operationSelector = createOperationSelector(
                operation,
                variables,
              );

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
              }
            }
          })
          .catch(error => {
            // AsyncStorage read wasn't successful - nevermind
            console.warn(error);
          });
      } else {
        fetchFromTheNetwork(networkHeaders, operation, variables, observer);
      }
    });
  };

  return new Environment({
    network: Network.create(fetchQuery),
    store,
  });
}
