// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import RelayQueryResponseCache from './RelayQueryResponseCache';

const cache = new RelayQueryResponseCache();

export default function createEnvironment(accessToken: string = '') {
  const store = new Store(new RecordSource());

  const networkHeaders: Object = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (accessToken) {
    networkHeaders.authorization = accessToken;
  }

  const fetchQuery = async (operation, variables, cacheConfig) => {
    const query = operation.text;

    if (cacheConfig.force === true) {
      await cache.remove(query, variables);
    } else {
      // refetch not forced so try to find it in cache
      const value = await cache.get(query, variables);
      if (value !== null) {
        // cache hit, yay
        return value;
      }
    }

    // TODO: fetch persisted queries instead (based on operation.id)
    const jsonPayload = await (await fetch('https://graphql.kiwi.com/', {
      method: 'POST',
      headers: networkHeaders,
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    })).json();

    // always save the response (probably not needed during cache "force")
    await cache.set(query, variables, jsonPayload);

    return jsonPayload;
  };

  const network = Network.create(fetchQuery);

  return new Environment({
    network,
    store,
  });
}
