// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import RNReverseGeocode from '@kiwicom/react-native-reverse-geocode';

import Address from './Address';

type Region = {|
  ...Coordinate,
  +latitudeDelta: number,
  +longitudeDelta: number,
|};

type Coordinate = {|
  +latitude: number,
  +longitude: number,
|};

type AddressType = {|
  +location: Coordinate,
  +name: string | null,
  +address: string,
|};

type Props = {|
  +region: Region,
  +searchText: string,
  +setLocation: (location: Coordinate) => void,
|};

type State = {|
  error: string | null,
  addresses: $ReadOnlyArray<AddressType> | null,
|};

export default class Addresses extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      addresses: null,
    };
  }

  componentDidMount() {
    this.fetchAddresses();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.searchText !== this.props.searchText) {
      this.fetchAddresses();
    }
  }

  fetchAddresses = () => {
    RNReverseGeocode.searchForLocations(
      this.props.searchText,
      this.props.region,
      (err, res) => {
        this.setState({
          error: err,
          addresses: res,
        });
      },
    );
  };

  render() {
    if (this.state.addresses != null) {
      return (
        <View>
          <Text style={styles.header}>
            <Translation id="mmb.trip_service.transportation.address_picker.all_places" />
          </Text>
          {this.state.addresses.map((address, index) => (
            <Address
              setLocation={this.props.setLocation}
              address={address}
              key={`${address.address}${index}`}
            />
          ))}
        </View>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  header: {
    paddingStart: 10,
    marginVertical: 10,
  },
});
