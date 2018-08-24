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
              // we have all data in the store to fulfill this query so let's
              // load it from the memory first and call the API after that
              // this will make the UI feel really fast
              observer.next(store.lookup(operationSelector.root));
              if (!ConnectionManager.isConnected()) {
                observer.complete();
              }
            }
          }
        })
        .catch(error => {
          // AsyncStorage read wasn't successful - nevermind
          console.warn(error);
        })
        .finally(() => {
          // Only fetch from network if we are connected
          if (ConnectionManager.isConnected()) {
            fetchFromTheNetwork(networkHeaders, operation, variables, observer);
          }
        });
    });
  };

  return new Environment({
    network: Network.create(fetchQuery),
    store,
  });
}
