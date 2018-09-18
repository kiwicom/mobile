// @flow

import * as React from 'react';

export type ResultType = 'list' | 'map';

const defaultValue = {
  show: 'list',
  actions: {
    setResultType: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext(
  defaultValue,
);

type Props = {|
  +children: React.Node,
|};

type State = {
  show: ResultType,
  +setResultType: (show: ResultType) => void,
};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      show: 'list',
      setResultType: this.setResultType,
    };
  }

  setResultType = (show: ResultType) => {
    this.setState({ show });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

export function withSearchResultsContext(select: (state: State) => Object) {
  return function(Component: React.ElementType) {
    const WithSearchResultsContext = (props: Object) => {
      const mapStateToProps = (state: Object) => {
        const stateProps = select(state);
        return <Component {...props} {...stateProps} />;
      };

      return <Consumer>{mapStateToProps}</Consumer>;
    };

    // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
    if (Component.navigationOptions) {
      WithSearchResultsContext.navigationOptions = Component.navigationOptions;
    }
    return WithSearchResultsContext;
  };
}
