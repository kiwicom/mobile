// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { StyleSheet, Text, Touchable } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

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
  +address: AddressType,
  +setLocation: (location: Coordinate) => void,
|};

export default class Address extends React.Component<Props> {
  setLocation = () => {
    this.props.setLocation(this.props.address.location);
  };

  render() {
    return (
      <Touchable onPress={this.setLocation}>
        <View style={styles.wrapper}>
          {Platform.OS === 'ios' && this.props.address.name != null && (
            <View style={styles.addressItemWrapper}>
              <Text numberOfLines={1} style={styles.name}>
                <Translation passThrough={this.props.address.name} />
              </Text>
            </View>
          )}
          <View style={styles.addressItemWrapper}>
            <Text numberOfLines={1} style={styles.address}>
              <Translation passThrough={this.props.address.address} />
            </Text>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: defaultTokens.paletteWhite,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontWeight: '600',
    marginBottom: 5,
  },
  address: {
    flex: 1,
    ios: {
      flex: 1,
      color: defaultTokens.paletteInkLight,
      fontSize: 12,
    },
  },
  addressItemWrapper: {
    flexDirection: 'row',
  },
});
