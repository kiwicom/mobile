// @flow strict

import * as React from 'react';

const defaultState = {
  lat: null,
  lng: null,
  canGetUserLocation: true,
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  children: React.Node,
|};

type State = {|
  lat: number | null,
  lng: number | null,
  canGetUserLocation: boolean,
|};

class Provider extends React.Component<Props, State> {
  state = {
    ...defaultState,
  };

  componentDidMount = () => {
    this.updateGeolocation();
  };

  updateGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          lat: latitude,
          lng: longitude,
          canGetUserLocation: true,
        });
      },
      error => {
        if (error.code === error.PERMISSION_DENIED) {
          // TODO: Show alert to tell user to go to settings an allow us to access location
          // Need alert with translations first
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

export default {
  Consumer,
  Provider,
};
