// @flow

import * as React from 'react';
import { commitMutation as commitRelayMutation } from 'react-relay';

import createEnvironment from './src/Environment';

export { default as PublicApiRenderer } from './src/PublicApiRenderer';
export { default as PrivateApiRenderer } from './src/PrivateApiRenderer';

type CommitMutationConfig = {|
  // please extend this type if needed
  mutation: string,
  variables: Object,
  onCompleted: Function,
|};

export const commitMutation = (config: CommitMutationConfig) =>
  commitRelayMutation(createEnvironment(() => {}), config);

export type QueryRendererProps = {|
  query: string,
  render: (props: Object) => React.Node,
  variables?: Object,
  cacheConfig?: {|
    force: boolean,
  |},
|};
