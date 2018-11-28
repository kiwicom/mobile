// @flow

import * as React from 'react';

const defaultState = {
  accessToken: null,
  bookingId: null,
  simpleToken: null,
  actions: {
    setAccessToken: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext<State>({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +accessToken?: string | null,
  +bookingId?: number | null,
  +simpleToken?: string | null,
|};

type State = {|
  accessToken: string | null,
  +bookingId: number | null,
  +simpleToken: string | null,
  +actions: {|
    +setAccessToken: (accessToken: string | null) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      accessToken: props.accessToken || null,
      bookingId: props.bookingId || null,
      simpleToken: props.simpleToken || null,
      actions: {
        setAccessToken: this.setAccessToken,
      },
    };
  }

  setAccessToken = (accessToken: string | null) => {
    this.setState({ accessToken });
  };

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export default { Consumer, Provider };

type PropsWithContext = {};

export function withAuthContext(Component: React.ElementType) {
  const WithAuthContext = (props: PropsWithContext) => (
    <Consumer>
      {({ actions, ...rest }) => (
        <Component {...props} {...rest} {...actions} />
      )}
    </Consumer>
  );
  // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
  if (Component.navigationOptions) {
    WithAuthContext.navigationOptions = Component.navigationOptions;
  }
  return WithAuthContext;
}
