// @flow

import { GetDeviceLocale } from '@kiwicom/mobile-localization';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

type FetcherResponse = {|
  +data: Object,
  +errors?: $ReadOnlyArray<Object>,
|};

export default function createEnvironment(accessToken: string = '') {
  const networkHeaders: Object = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': GetDeviceLocale().replace('-', '_'),
  };

  if (accessToken) {
    networkHeaders.authorization = accessToken;
  }

  const fetchQuery = async (operation, variables): Promise<FetcherResponse> => {
    // TODO: fetch persisted queries instead (based on operation.id)
    const response = await (await fetch('https://graphql.kiwi.com/', {
      method: 'POST',
      headers: networkHeaders,
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    })).json();

    if (response.errors) {
      response.errors.forEach(error => console.warn(error));
    }

    return response;
  };

  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });
}
