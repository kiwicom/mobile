// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Icon, StyleSheet, type TranslationType } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SeparatorTrimmed } from '@kiwicom/mobile-navigation';

import HotelAmenityCheckbox from './HotelAmenityCheckbox';

type Amenity = {|
  +text: TranslationType,
  +icon: string,
  +amenityName: string,
|};

type Props = {|
  +amenities: $ReadOnlyArray<Amenity>,
  +onPress: string => void,
  +selectedAmenities: $ReadOnlyArray<string>,
|};

const SEPARATOR_HEIGHT = 0.5;

export default function HotelAmenities(props: Props) {
  return props.amenities.map<React.Node>(amenity => (
    <View style={styles.wrapper} key={amenity.amenityName}>
      <HotelAmenityCheckbox
        isChecked={props.selectedAmenities.includes(amenity.amenityName)}
        onPress={props.onPress}
        icon={
          <Icon name={amenity.icon} style={styles.amenityIcon} size="small" />
        }
        amenityName={amenity.amenityName}
        text={amenity.text}
      />
      <View style={styles.separatorEnd}>
        <SeparatorTrimmed
          gapSizeStart={31}
          color={defaultTokens.paletteInkLighter}
          height={SEPARATOR_HEIGHT}
        />
      </View>
    </View>
  ));
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: -SEPARATOR_HEIGHT,
  },
  amenityIcon: {
    marginEnd: 10,
  },
  separatorEnd: {
    marginEnd: -15,
  },
});
