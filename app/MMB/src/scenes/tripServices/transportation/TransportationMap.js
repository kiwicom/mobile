// @flow strict

import * as React from 'react';
import { View } from 'react-native';
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
  DeviceInfo,
  DateFormatter,
} from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import querystring from 'querystring';

import getFormattedAddress from '../../../helpers/getFormattedAddress';
import { withGoogleMapsContext } from '../../../context/GoogleMapsContext';
import MarkerLocationButton from './MarkerLocationButton';
import CurrentPositionButton from './CurrentPositionButton';
import AddressLocationLegend from './AddressLocationLegend';
import MarkerA from './MarkerA';
import MarkerB from './MarkerB';

type State = {|
  region: Region,
  markers: Markers,
  showUserLocation: boolean,
  currentLocation: ?Coordinate,
  formattedAddress: string,
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
      showUserLocation: false,
      currentLocation: null,
      formattedAddress: '',
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

  openLocationPicker = () => {
    this.props.navigation.navigate('AddressPickerScreen');
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

  renderMarkerB = async (e: NativeEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    const formattedAddress = await getFormattedAddress(
      { latitude, longitude },
      this.props.googleMapsAPIKey,
    );
    this.setState(state => ({
      markers: {
        ...state.markers,
        markerB: {
          latitude,
          longitude,
        },
      },
      formattedAddress,
    }));
  };

  showUserLocation = (currentLocation: Coordinate) => {
    this.setState(state => ({
      currentLocation,
      region: {
        ...state.region,
        ...currentLocation,
      },
      showUserLocation: true,
    }));
  };

  render() {
    const { showUserLocation, markers, formattedAddress } = this.state;
    const { markerA, markerB } = markers;

    return (
      <View style={styles.wrapper}>
        <MarkerLocationButton
          formattedAddress={formattedAddress}
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
            style={styles.map}
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
  map: {
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
