// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';

import createEnvironment from '../../services/relay/Environment';
import FullPageLoading from '../../components/visual/loaders/FullPageLoading';
import GeneralError from '../../components/errors/GeneralError';

type Props = {|
  query: string,
  render: ({ error: Object, props: Object }) => React.Node,
  variables?: Object,
  cacheConfig?: {|
    force: boolean,
  |},
|};

export default function publicApiRenderer({
  query,
  render,
  variables,
  cacheConfig,
}: Props) {
  return (
    <QueryRenderer
      environment={createEnvironment()}
      query={query}
      variables={variables}
      render={({ error, props }) => {
        // FIXME: it does not catch errors?
        if (error) {
          return <GeneralError errorMessage={error.message} />;
        } else if (props) {
          return render(props);
        }
        return <FullPageLoading />;
      }}
      cacheConfig={cacheConfig}
    />
  );
}
