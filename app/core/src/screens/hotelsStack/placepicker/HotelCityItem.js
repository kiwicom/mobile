// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Touchable } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { HotelCityItem as City } from './__generated__/HotelCityItem.graphql';
import {
  withHotelsFormContext,
  type HotelsFormContextType,
  type SaveCity,
} from '../HotelsFormContext';

type Props = {|
  +data: City,
  +onPress: () => void,
  +setCity: SaveCity => void,
|};

class HotelCityItem extends React.Component<Props> {
  onPress = () => {
    const { data } = this.props;
    this.props.setCity({
      cityId: data.id,
      cityName: data.name ?? '',
      coordinates: {
        lng: data.location?.lng ?? Number.MAX_SAFE_INTEGER,
        lat: data.location?.lat ?? Number.MAX_SAFE_INTEGER,
      },
    });
    this.props.onPress();
  };

  render() {
    return (
      <Touchable onPress={this.onPress} style={styles.row}>
        <Translation passThrough={this.props.data.name} />
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    backgroundColor: defaultTokens.paletteCloudNormal,
    marginBottom: 8,
    borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
  },
});

const select = ({ actions: { setCity } }: HotelsFormContextType) => ({
  setCity,
});

export default createFragmentContainer(
  withHotelsFormContext(select)(HotelCityItem),
  graphql`
    fragment HotelCityItem on HotelCity {
      id
      name
      location {
        lat
        lng
      }
    }
  `,
);
