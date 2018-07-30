// @flow

import * as React from 'react';

const defaultState = {
  version: '',
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +version: string,
|};

type State = {|
  +version: string,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      version: props.version,
    };
  }
  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

export function withHotelsContext(Component: React.ElementType) {
  return function WithHotelsContext(props: Object) {
    return <Consumer>{value => <Component {...props} {...value} />}</Consumer>;
  };
}
