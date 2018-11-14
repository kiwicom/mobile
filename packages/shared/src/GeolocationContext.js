// @flow strict

import * as React from 'react';

const defaultState = {
  lat: null,
  lng: null,
  canGetUserLocation: false,
  actions: { updateGeolocation: () => {} },
};

const { Consumer, Provider: ContextProvider } = React.createContext<State>({
  ...defaultState,
});

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

type Props = {|
  +children: React.Node,
|};

type State = {|
  lat: number | null,
  lng: number | null,
  canGetUserLocation: boolean,
  actions: {|
    +updateGeolocation: (
      dealWithLocation?: (coordinate: Coordinate) => void,
      onError?: () => void,
    ) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ...defaultState,
      actions: {
        updateGeolocation: this.updateGeolocation,
      },
    };
  }

  componentDidMount = () => {
    this.updateGeolocation();
  };

  updateGeolocation = (
    dealWithLocation?: (coordinate: Coordinate) => void = () => {},
    onError?: () => void = () => {},
  ) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dealWithLocation({ latitude, longitude });
        this.setState({
          lat: latitude,
          lng: longitude,
          canGetUserLocation: true,
        });
      },
      error => {
        if (error.code === error.PERMISSION_DENIED) {
          onError();
        }
        this.setState({ canGetUserLocation: false });
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: Number.MAX_SAFE_INTEGER,
      },
    );
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

export const withGeolocationContext = (Component: React.ElementType) => {
  const withGeolocationContext = (props: {}) => {
    return (
      <Consumer>
        {({ actions, ...rest }) => (
          <Component {...props} {...actions} {...rest} />
        )}
      </Consumer>
    );
  };
  // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
  if (Component.navigationOptions) {
    withGeolocationContext.navigationOptions = Component.navigationOptions;
  }
  return withGeolocationContext;
};
