// @flow strict

import * as React from 'react';

import { Consumer } from './SplitNavigation';

type State = {|
  activeId: string,
|};

const withSplitNavigationContext = (Component: React.ElementType) => {
  return class WithSplitNavigationContext extends React.Component<{
    [string]: mixed,
    ...,
  }> {
    // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
    static navigationOptions = Component.navigationOptions;
    // $FlowFixMe Errors after moving rn modules from untyped to declarations
    renderInner = ({ activeId }: State) => <Component {...this.props} activeId={activeId} />;

    render() {
      return <Consumer>{this.renderInner}</Consumer>;
    }
  };
};

export default withSplitNavigationContext;
