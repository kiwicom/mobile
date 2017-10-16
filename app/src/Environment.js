// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

export default function createEnvironment(accessToken: string = '') {
  const store = new Store(new RecordSource());

  const networkHeaders: Object = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (accessToken) {
    networkHeaders.authorization = accessToken;
  }

  const network = Network.create((operation, variables) => {
    return fetch('https://graphql.kiwi.com/', {
      method: 'POST',
      headers: networkHeaders,
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      return response.json();
    });
  });

  return new Environment({
    network,
    store,
  });
}
