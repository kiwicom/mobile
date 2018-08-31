// @flow strict

import * as React from 'react';
import { Linking } from 'react-native';
import { Alert } from '@kiwicom/mobile-localization';

const defaultState = {
  lat: null,
  lng: null,
  canGetUserLocation: false,
  actions: { updateGeolocation: () => {} },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +shouldNotUpdateGeolocationComponentDidMount?: boolean,
|};

type State = {|
  lat: number | null,
  lng: number | null,
  canGetUserLocation: boolean,
  actions: {|
    +updateGeolocation: (failSilently: boolean) => void,
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
    const {
      shouldNotUpdateGeolocationComponentDidMount: dontUpdateGeolocation,
    } = this.props;
    if (dontUpdateGeolocation != null) {
      !dontUpdateGeolocation && this.updateGeolocation(false);
    }
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
          undefined,
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

  updateGeolocation = (failSilently: boolean) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          lat: latitude,
          lng: longitude,
          canGetUserLocation: true,
        });
      },
      error => {
        if (!failSilently && error.code === error.PERMISSION_DENIED) {
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

export const withGeolocationContext = (Component: React.ElementType) => {
  const withGeolocationContext = (props: {}) => {
    return (
      <Provider shouldNotUpdateGeolocationComponentDidMount={true}>
        <Consumer>
          {({ actions, ...rest }) => (
            <Component {...props} {...actions} {...rest} />
          )}
        </Consumer>
      </Provider>
    );
  };
  // $FlowExpectedError: We need to pass on the navigationOptions if any, flow does not know about it, but a react component might have it
  if (Component.navigationOptions) {
    withGeolocationContext.navigationOptions = Component.navigationOptions;
  }
  return withGeolocationContext;
};
