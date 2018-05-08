// @flow

import * as React from 'react';
import Relay from 'react-relay';

import PublicEnvironment from './src/PublicEnvironment';

export { default as PublicApiRenderer } from './src/PublicApiRenderer';
export { default as PrivateApiRenderer } from './src/PrivateApiRenderer';
export { default as AuthContext } from './src/AuthContext';

type CommitMutationConfig = {|
  // please extend this type if needed
  mutation: string,
  variables: Object,
  onCompleted: Function,
|};

export const commitMutation = (config: CommitMutationConfig) =>
  Relay.commitMutation(PublicEnvironment.getEnvironment(() => {}), config);

export type QueryRendererProps = {|
  query: string,
  render: (props: Object) => React.Node,
  variables?: Object,
|};

export type RelayPaginationProp = {|
  hasMore: () => boolean,
  isLoading: () => boolean,
  loadMore: (pageSize: number, callback: (error: ?Error) => void) => void,
  refetchConnection: (
    totalCount: number,
    callback: (error: ?Error) => void,
    refetchVariables: ?any,
  ) => void,
|};
