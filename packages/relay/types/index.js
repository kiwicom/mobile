// @flow

import { type GraphQLTaggedNode } from '@adeira/relay';
import * as React from 'react';

export type QueryRendererProps = {|
  +query: GraphQLTaggedNode,
  +render: (props: Object) => React.Node,
  +renderOfflineScreen?: ?(retry: () => void) => React.Node,
  +variables?: { ... },
  +errorFooter?: ?React.Node,
|};
