// @flow

import * as React from 'react';
import Relay from 'react-relay'; // eslint-disable-line no-restricted-imports

import PublicEnvironment from './src/PublicEnvironment';

export {
  QueryRenderer,
  graphql,
  createPaginationContainer,
  createRefetchContainer,
} from 'react-relay';
export { default as PublicApiRenderer } from './src/PublicApiRenderer';
export { default as PrivateApiRenderer } from './src/PrivateApiRenderer';
export { default as AuthContext } from './src/AuthContext';

// just a very simple Flow types - doesn't work very well yet (better than nothing)
export const createFragmentContainer = (
  component: React.ComponentType<*>,
  fragmentSpec: Object,
): React.ComponentType<*> => {
  return Relay.createFragmentContainer(component, fragmentSpec);
};

export const commitMutation = (config: CommitMutationConfig) => {
  return Relay.commitMutation(PublicEnvironment.getEnvironment(), config);
};

// Flow types:

type CommitMutationConfig = {|
  // please extend this type if needed
  +mutation: string,
  +variables: Object,
  +onCompleted: Function,
|};

export type QueryRendererProps = {|
  +query: string,
  +render: (props: Object) => React.Node,
  +variables?: Object,
|};

export type RelayPaginationProp = {|
  +hasMore: () => boolean,
  +isLoading: () => boolean,
  +loadMore: (pageSize: number, callback: (error: ?Error) => void) => void,
  +refetchConnection: (
    totalCount: number,
    callback: (error: ?Error) => void,
    refetchVariables: ?any,
  ) => void,
|};

type RefetchOptions = {|
  +force?: boolean,
|};

type Disposable = {|
  +dispose: () => void,
|};

export type RelayRefetchProp = {|
  +refetch: (
    refetchVariables: Object | null | ((fragmentVariables: Object) => Object),
    renderVariables: ?Object,
    callback: ?(error: ?Error) => void,
    options?: RefetchOptions,
  ) => Disposable,
|};
