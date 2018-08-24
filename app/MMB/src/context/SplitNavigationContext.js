// @flow

import * as React from 'react';

const defaultState = {
  activeId: 'mmb.trip_overview',
  actions: {
    setActiveId: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
|};

type State = {|
  activeId: string,
  +actions: {|
    +setActiveId: (activeId: string) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        setActiveId: this.setActiveId,
      },
    };
  }

  setActiveId = (activeId: string) => {
    this.setState({ activeId });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

export const withSplitNavigationContext = (Component: React.ElementType) => {
  const WithSplitNavigationContext = (props: Object) => {
    return (
      <Consumer>
        {({ activeId, actions: { setActiveId } }) => (
          <Component {...props} activeId={activeId} setActiveId={setActiveId} />
        )}
      </Consumer>
    );
  };

  // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
  if (Component.navigationOptions) {
    WithSplitNavigationContext.navigationOptions = Component.navigationOptions;
  }
  return WithSplitNavigationContext;
};
