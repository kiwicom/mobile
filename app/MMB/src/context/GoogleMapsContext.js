// @flow strict

import * as React from 'react';

const defaultState = {
  googleMapsAPIKey: '',
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +googleMapsAPIKey: string,
|};

type State = {|
  +googleMapsAPIKey: string,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      googleMapsAPIKey: props.googleMapsAPIKey,
    };
  }
  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

type PropsWithContext = {};

export function withGoogleMapsContext(Component: React.ElementType) {
  const WithGoogleMapsContext = (props: PropsWithContext) => (
    <Consumer>{context => <Component {...props} {...context} />}</Consumer>
  );
  // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
  if (Component.navigationOptions) {
    WithGoogleMapsContext.navigationOptions = Component.navigationOptions;
  }
  return WithGoogleMapsContext;
}
