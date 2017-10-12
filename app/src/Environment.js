// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch('https://graphql.kiwi.com/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      authorization: 'WyJTNVRTWTBOdXNWT3NRUlR5UnBNZV9HIiwiWFZQTTdIOFJVeW5OTFJsYjZGMllmZW9ZRWx0Y05NdWNzRWdkeUFyYmIxdC96bDFlcTNoL2UiLDQxODM1NTM5MDhd.BYrizeavnsynpp8Od7NgpF9l8XY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store,
});

export default environment;
