// @flow strict

import * as React from 'react';

const defaultState = {
  idNumber: '',
  expiryDate: null,
  noExpiry: false,
  actions: {
    onIdNumberChange: () => {},
    onDateChange: () => {},
    onNoExpiryChange: () => {},
    reset: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
|};

type State = {|
  idNumber: string,
  expiryDate: Date | null,
  noExpiry: boolean,
  +actions: {
    +onIdNumberChange: (idNumber: string) => void,
    +onDateChange: (date: Date) => void,
    +onNoExpiryChange: (noExipry: boolean) => void,
    +reset: () => void,
  },
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      idNumber: '',
      expiryDate: null,
      noExpiry: false,
      actions: {
        onIdNumberChange: this.onIdNumberChange,
        onDateChange: this.onDateChange,
        onNoExpiryChange: this.onNoExpiryChange,
        reset: this.reset,
      },
    };
  }

  onIdNumberChange = (idNumber: string) => {
    this.setState({ idNumber });
  };

  onDateChange = (expiryDate: Date) => {
    this.setState({ expiryDate });
  };

  onNoExpiryChange = (noExpiry: boolean) => {
    this.setState({ noExpiry, expiryDate: null });
  };

  reset = () => {
    this.setState({ idNumber: '', noExpiry: false, expiryDate: null });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

type PropsWithContext = {};

export function withFormContext(Component: React.ElementType) {
  const WithFormContext = (props: PropsWithContext) => (
    <Consumer>
      {({ actions, ...rest }) => (
        <Component {...props} {...rest} {...actions} />
      )}
    </Consumer>
  );
  // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
  if (Component.navigationOptions) {
    WithFormContext.navigationOptions = Component.navigationOptions;
  }
  return WithFormContext;
}
