// @flow

import { GetDeviceLocale } from '@kiwicom/mobile-localization';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  type GraphQLResponse,
  type ConcreteOperation,
  type Variables,
} from 'relay-runtime';

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

// Copied from https://github.com/facebook/relay/blob/master/packages/relay-runtime/network/RelayNetworkTypes.js#L58
type ExecutePayload = {|
  operation: ConcreteOperation,
  variables: Variables,
  response: GraphQLResponse,
  isOptimistic?: boolean,
|};

export default function createEnvironment(
  onPartialError: GraphQLError => void,
  accessToken: string = '',
) {
  const networkHeaders: Object = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': GetDeviceLocale().replace('-', '_'),
  };

  if (accessToken) {
    networkHeaders.authorization = accessToken;
  }

  const fetchQuery = async (
    operation,
    variables,
  ): Promise<{| data: Object, errors?: $ReadOnlyArray<Object> |}> => {
    // TODO: fetch persisted queries instead (based on operation.id)
    return await (await fetch('https://graphql.kiwi.com/', {
      method: 'POST',
      headers: networkHeaders,
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    })).json();
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
export class PartialErrorsEnvironment extends Environment {
  onPartialError: GraphQLError => void;

  constructor(config: Object, onPartialError: GraphQLError => void) {
    super(config);
    this.onPartialError = onPartialError;
  }

  executePayload = (executePayload: ExecutePayload) => {
    if (executePayload.response.errors) {
      executePayload.response.errors.map(error => this.onPartialError(error));
    }
  };

  execute = (executeConfig: Object) => {
    return super.execute(executeConfig).do({
      next: this.executePayload,
    });
  };
}
