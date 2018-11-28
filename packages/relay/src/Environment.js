// @flow

import { DeviceInfo } from '@kiwicom/mobile-localization';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
} from 'relay-runtime';
import fetchWithRetries from '@mrtnzlml/fetch';

import ConnectionManager from './ConnectionManager';
import CacheManager from './CacheManager';

type FetcherResponse = {|
  +data: Object,
  +errors?: $ReadOnlyArray<Object>,
|};

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
    if (operation.operationKind !== 'mutation') {
      CacheManager.set(operation.name, variables, jsonResponse);
    }

    observer.next(jsonResponse);
    observer.complete();
  } catch (error) {
    // Handle error from fetch, unless we will see loader forever
    observer.error(error);
    observer.complete();
    console.warn(error);
  }
}

const handleNoNetworkNoCachedResponse = observer => {
  // If not we are stuck on loader forever.
  observer.error({ message: 'No network' });
  observer.complete();
};

const asyncStoreRead = async (observer, operation, variables) => {
  try {
    const cachedData = await CacheManager.get(operation.name, variables);

    if (cachedData) {
      // It loads smoother if we do this in a set timeout
      // If we don't the UI freezes for a while
      setTimeout(() => {
        observer.next(cachedData);
        if (ConnectionManager.isConnected() === false) {
          observer.complete();
        }
      });
    } else if (ConnectionManager.isConnected() === false) {
      return handleNoNetworkNoCachedResponse(observer);
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
      if (operation.operationKind !== 'mutation') {
        asyncStoreRead(observer, operation, variables);
      }
      if (ConnectionManager.isConnected()) {
        fetchFromTheNetwork(networkHeaders, operation, variables, observer);
      }
    });
  };

  return new Environment({
    network: Network.create(fetchQuery),
    store,
  });
}
