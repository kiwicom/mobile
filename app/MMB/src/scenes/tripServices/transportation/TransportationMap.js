// @flow strict

import * as React from 'react';
import { View, Linking } from 'react-native';
import MapView from 'react-native-maps';
import { HeaderBackButton } from 'react-navigation';
import { StyleSheet } from '@kiwicom/mobile-shared';
import {
  HeaderButton,
  HeaderTitle,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import {
  Translation,
  Alert,
  DeviceInfo,
  DateFormatter,
} from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import querystring from 'querystring';

import { withGoogleMapsContext } from '../../../context/GoogleMapsContext';
import MarkerLocationButton from './MarkerLocationButton';
import CurrentPositionButton from './CurrentPositionButton';
import AddressLocationLegend from './AddressLocationLegend';
import MarkerA from './MarkerA';
import MarkerB from './MarkerB';

type State = {|
  region: Region,
  markers: Markers,
  destination: string,
  showUserLocation: boolean,
  currentLocation: ?Region,
|};

type Region = {|
  ...Coordinate,
  +latitudeDelta: number,
  +longitudeDelta: number,
|};

type Markers = {|
  +markerA: ?Coordinate,
  +markerB: ?Coordinate,
|};

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

type NativeEvent = {|
  +nativeEvent: {|
    +coordinate: Coordinate,
  |},
|};

type Props = {|
  +navigation: NavigationType,
  +googleMapsAPIKey: string,
  +params: {|
    +location: {| +lat: number, +lng: number |},
    +whitelabelURL: string,
    +date: ?string,
  |},
  +openLink: () => void,
  +disabled: boolean,
|};
export class TransportationMap extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      region: {
        latitude: props.params.location.lat,
        longitude: props.params.location.lng,
        latitudeDelta: 0.0375, // TODO fine tune these deltas
        longitudeDelta: 0.0375, // TODO fine tune these deltas
      },
      markers: {
        markerA: null,
        markerB: null,
      },
      destination: '',
      showUserLocation: false,
      currentLocation: null,
    };
  }

  static navigationOptions = (props: Props) => {
    function goBack() {
      props.navigation.goBack(null);
    }

    return {
      headerLeft: (
        <HeaderBackButton
          tintColor={defaultTokens.paletteProductNormal}
          onPress={goBack}
        />
      ),
      headerTitle: (
        <HeaderTitle>
          <Translation id="mmb.trip_services.transportation.map.title" />
        </HeaderTitle>
      ),
      headerRight: (
        <HeaderButton.Right onPress={props.openLink} disabled={props.disabled}>
          <HeaderButton.Text>
            <Translation id="mmb.trip_services.transportation.map.right_button" />
          </HeaderButton.Text>
        </HeaderButton.Right>
      ),
      headerStyle: {
        backgroundColor: defaultTokens.paletteWhite,
        borderBottomWidth: 0,
      },
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      disabled: true,
      openLink: this.openLink,
    });
  }

  componentDidUpdate() {
    const { navigation } = this.props;
    const { markerA, markerB } = this.state.markers;
    if (
      markerA != null &&
      markerB != null &&
      navigation.state.params.disabled
    ) {
      navigation.setParams({ disabled: false });
    }
  }

  openLocationPicker = async () => {
    const { currentLocation } = this.state;
    let currentAddress;

    if (currentLocation != null) {
      const { latitude, longitude } = currentLocation;
      currentAddress = await this.getFormattedAddress({
        latitude,
        longitude,
      });
    }

    this.props.navigation.navigate('AddressPickerScreen', {
      currentAddress,
    });
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

  onRegionChange = (region: Region) => {
    this.setState({ region });
  };

  buildWhitelabelURL = () => {
    const { markerA, markerB } = this.state.markers;
    const whitelabelURL = this.props.params.whitelabelURL;
    if (markerA != null && markerB != null) {
      let date;
      let time = '';
      if (this.props.params.date != null) {
        const transportationDate = new Date(this.props.params.date);
        time = DateFormatter(transportationDate).formatTimeForMachine();
        date = DateFormatter(transportationDate).formatForMachine();
      }

      const pickup = `${markerA.latitude},${markerA.longitude}`;
      const dropoff = `${markerB.latitude},${markerB.longitude}`;
      const language = DeviceInfo.getLanguage() || 'en-gb';
      const currency = 'EUR';
      const query = querystring.stringify({
        utm_source: 'kiwi',
        utm_medium: 'startpart',
        utm_campaign: 'mobileappconfpage',
        pickup,
        dropoff,
        language,
        currency,
        date: date,
      });

      // querystring.stringify uses encodeURIComponent which turns HH:mm into HH%3Amm which rideways does not understand
      return `${whitelabelURL}?${query}&time=${time}`;
    }
    return whitelabelURL;
  };

  openLink = () => {
    const { markerA, markerB } = this.state.markers;
    if (markerA != null && markerB != null) {
      const url = this.buildWhitelabelURL();

      this.props.navigation.navigate('mmb.trip_services.webview', {
        url,
      });
    }
  };

  renderMarkerA = (e: NativeEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    this.setState(state => ({
      markers: {
        ...state.markers,
        markerA: {
          latitude,
          longitude,
        },
      },
    }));
  };

  renderMarkerB = (e: NativeEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    this.setDestination({ latitude, longitude });
    this.setState(state => ({
      markers: {
        ...state.markers,
        markerB: {
          latitude,
          longitude,
        },
      },
    }));
  };

  getFormattedAddress = async ({ latitude, longitude }: Coordinate) => {
    const address = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
        this.props.googleMapsAPIKey
      }`,
    )
      .then(res => res.json())
      .then(json => json.results[0].address_components);

    const city = (address.find(x => x.types.includes('locality')) || {})
      .long_name;
    const route = (address.find(x => x.types.includes('route')) || {})
      .long_name;
    const streetNumber = (
      address.find(x => x.types.includes('street_number')) || {}
    ).long_name;

    const area = (
      address.find(x => x.types.includes('administrative_area_level_1')) || {}
    ).long_name;

    const streetAddress =
      route !== undefined && streetNumber !== undefined
        ? route.concat(' ', streetNumber)
        : route;

    const formattedAddress = [city, streetAddress, area]
      .filter(item => item !== undefined)
      .join(', ');

    return formattedAddress;
  };

  setDestination = async ({ latitude, longitude }: Coordinate) => {
    const destination = await this.getFormattedAddress({ latitude, longitude });
    this.setState({
      destination,
    });
  };

  showUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const currentLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0375,
          longitudeDelta: 0.0375,
        };
        this.setState({
          currentLocation,
          region: currentLocation,
          showUserLocation: true,
        });
      },
      () => {
        // TODO: Deal with Native Alert coming on top of this alert.
        this.alertOpenSettings();
      },
    );
  };

  render() {
    const { destination, showUserLocation, markers } = this.state;
    const { markerA, markerB } = markers;

    return (
      <View style={styles.wrapper}>
        <MarkerLocationButton
          destination={destination}
          onPress={this.openLocationPicker}
        />
        <View style={styles.wrapper}>
          <MapView
            region={this.state.region}
            onRegionChangeComplete={this.onRegionChange}
            onPress={this.renderMarkerB}
            onLongPress={this.renderMarkerA}
            scrollEnabled={true}
            showsUserLocation={showUserLocation}
            userLocationAnnotationTitle=""
            style={styles.mapBottom}
          >
            <MarkerA coordinate={markerA} />
            <MarkerB coordinate={markerB} />
          </MapView>
        </View>
        <AddressLocationLegend />
        <CurrentPositionButton onPress={this.showUserLocation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapBottom: {
    android: {
      bottom: -25,
    },
    ...StyleSheet.absoluteFillObject,
  },
  wrapper: {
    flex: 1,
  },
});

export default withGoogleMapsContext(TransportationMap);
