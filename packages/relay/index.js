// @flow

import * as React from 'react';
import {
  commitMutation as _commitMutation,
  type GraphQLTaggedNode as _GraphQLTaggedNode,
  type RelayProp as _RelayProp,
  type RefetchRelayProp,
  type PaginationRelayProp,
  commitLocalUpdate as _commitLocalUpdate,
} from '@kiwicom/relay';
import { Alert } from '@kiwicom/mobile-localization';

import PublicEnvironment from './src/PublicEnvironment';
import PrivateEnvironment from './src/PrivateEnvironment';
import ConnectionManager from './src/ConnectionManager';

export {
  graphql,
  createPaginationContainer,
  createRefetchContainer,
  createFragmentContainer,
} from '@kiwicom/relay';
export { default as PublicApiRenderer } from './src/PublicApiRenderer';
export { default as PrivateApiRenderer } from './src/PrivateApiRenderer';
export { default as AuthContext, withAuthContext } from './src/AuthContext';

export const commitMutation = (
  config: CommitMutationConfig,
  token?: string,
) => {
  if (ConnectionManager.isConnected() === false) {
    Alert.translatedAlert(null, { id: 'relay.query_renderer.no_connection' });
    config.onCompleted({ data: null }, 'No connection');
    return null;
  }
  if (token) {
    return _commitMutation(PrivateEnvironment.getEnvironment(token), config);
  }
  // $FlowExpectedError: Let's wait and see the outcome of https://gitlab.skypicker.com/incubator/universe/issues/504
  return _commitMutation(PublicEnvironment.getEnvironment(), config);
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

export type QueryRendererProps = {|
  +query: _GraphQLTaggedNode,
  +render: (props: Object) => React.Node,
  +renderOfflineScreen?: ?(retry: () => void) => React.Node,
  +variables?: Object,
  +errorFooter?: ?React.Node,
|};

export type RelayPaginationProp = PaginationRelayProp;
export type RelayProp = _RelayProp;
export type RelayRefetchProp = RefetchRelayProp;

export type GraphQLTaggedNode = _GraphQLTaggedNode;
