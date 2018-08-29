// @flow strict

import * as React from 'react';
import { Linking } from 'react-native';
import { Alert } from '@kiwicom/mobile-localization';

const defaultState = {
  lat: null,
  lng: null,
  canGetUserLocation: true,
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +failSilently?: boolean,
  +onPressOK?: () => void,
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

  openSettings = () => {
    Linking.openURL('app-settings:');
  };

  alertOpenSettings = () => {
    Alert.translatedAlert(
      undefined,
      {
        id: 'mmb.trip_services.transportation.map.current_position_alert',
      },
      [
        {
          text: { id: 'mmb.alert.button.ok' },
          onPress: this.props.onPressOK,
          style: 'default',
        },
        {
          text: { id: 'mmb.alert.button.settings' },
          onPress: this.openSettings,
          style: 'default',
        },
      ],
    );
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
        if (
          this.props.failSilently != null &&
          !this.props.failSilently &&
          error.code === error.PERMISSION_DENIED
        ) {
          this.alertOpenSettings();
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

type Location = {|
  +latitude: number,
  +longitude: number,
|};

type GetLocationProps = {|
  +getLocation: boolean,
  +dealWithLocation: (location: Location) => void,
  +failSilently: boolean,
  +onPressOK?: () => void,
|};

type GetLocationState = {|
  getLocation: boolean,
|};
export class GetLocation extends React.Component<
  GetLocationProps,
  GetLocationState,
> {
  constructor(props: GetLocationProps) {
    super(props);
    this.state = {
      getLocation: props.getLocation,
    };
  }

  componentDidUpdate(prevProps: GetLocationProps, prevState: GetLocationState) {
    if (prevState.getLocation !== this.props.getLocation) {
      this.setState({
        getLocation: this.props.getLocation,
      });
    }
  }

  onPress = () => {
    this.setState({
      getLocation: true,
    });
  };

  unmountContext = () => {
    this.setState({ getLocation: false });
  };
  render() {
    if (!this.state.getLocation) {
      return null;
    }
    return (
      <Provider
        failSilently={this.props.failSilently}
        onPressOK={this.props.onPressOK}
      >
        <Consumer>
          {({ lat, lng, canGetUserLocation }) => {
            if (canGetUserLocation) {
              lat != null &&
                lng != null &&
                this.props.dealWithLocation({
                  latitude: lat,
                  longitude: lng,
                });
            } else {
              this.unmountContext();
            }
          }}
        </Consumer>
      </Provider>
    );
  }
}
