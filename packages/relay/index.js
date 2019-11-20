// @flow

import {
  commitMutation as _commitMutation,
  type GraphQLTaggedNode as _GraphQLTaggedNode,
  type RelayProp as _RelayProp,
  type RefetchRelayProp,
  type PaginationRelayProp,
  commitLocalUpdate as _commitLocalUpdate,
  type Environment,
} from '@adeira/relay';
import { Alert } from '@kiwicom/mobile-localization';

import ConnectionManager from './src/ConnectionManager';
import type { QueryRendererProps as _QueryRendererProps } from './types';

export { default as PublicEnvironment } from './src/PublicEnvironment';

export {
  graphql,
  createPaginationContainer,
  createRefetchContainer,
  createFragmentContainer,
} from '@adeira/relay';
export { default as PublicApiRenderer } from './src/PublicApiRenderer';
export { default as PrivateApiRenderer } from './src/PrivateApiRenderer';
export { default as AuthContext, withAuthContext } from './src/AuthContext';

export const commitMutation = (environment: Environment, config: CommitMutationConfig) => {
  if (ConnectionManager.isConnected() === false) {
    Alert.translatedAlert(null, { id: 'relay.query_renderer.no_connection' });
    config.onCompleted({ data: null }, 'No connection');
    return null;
  }

  return _commitMutation(environment, config);
};

export const commitLocalUpdate = _commitLocalUpdate;

// Flow types:

type CommitMutationConfig = {|
  // please extend this type if needed
  +mutation: _GraphQLTaggedNode,
  +variables: Object,
  +onCompleted: Function,
  +updater?: Function,
|};

export type QueryRendererProps = _QueryRendererProps;

export type RelayPaginationProp = PaginationRelayProp;
export type RelayProp = _RelayProp;
export type RelayRefetchProp = RefetchRelayProp;

export type GraphQLTaggedNode = _GraphQLTaggedNode;
