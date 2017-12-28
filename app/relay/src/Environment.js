// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import RelayQueryResponseCache from './RelayQueryResponseCache';

const cache = new RelayQueryResponseCache();

type GraphQLError = {|
  message: string,
  locations?: {|
    line: number,
    column: number,
  |},
  path?: string[],
  _proxy?: {|
    statusCode: number,
    url: string,
  |},
|};

export default function createEnvironment(
  onPartialError: GraphQLError => void,
  accessToken: string = '',
) {
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
      // refetch is not forced so try to find it in cache
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

    if (!jsonPayload.errors) {
      // always save the valid response (probably not needed during cache "force")
      await cache.set(query, variables, jsonPayload);
    }
    return jsonPayload;
  };

  return new PartialErrorsEnvironment(
    {
      network: Network.create(fetchQuery),
      store: new Store(new RecordSource()),
    },
    onPartialError,
  );
}

/**
 * This environment is workaround for: https://github.com/facebook/relay/issues/1913
 */
class PartialErrorsEnvironment extends Environment {
  onPartialError: GraphQLError => void;

  constructor(config: Object, onPartialError: GraphQLError => void) {
    super(config);
    this.onPartialError = onPartialError;
  }

  execute = (executeConfig: Object) => {
    return super.execute(executeConfig).do({
      next: executePayload => {
        if (executePayload.errors) {
          executePayload.errors.map(error => this.onPartialError(error));
        }
      },
    });
  };
}
