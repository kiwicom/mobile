// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, StretchedImage } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import MapView from './MapView';
import AdditionalInfo from './AdditionalInfo';
import gradient from '../gradient.png';
import type { SingleMap_hotel as HotelType } from './__generated__/SingleMap_hotel.graphql';

type Props = {|
  +hotel: ?HotelType,
|};

const SingleMap = (props: Props) => {
  return (
    <View style={styles.container}>
      <MapView hotel={props.hotel?.hotel} />
      <View style={styles.underlay}>
        <StretchedImage source={gradient} />
      </View>
      <View style={styles.dropShadow}>
        <AdditionalInfo data={props.hotel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  underlay: { height: 132 },
  dropShadow: {
    shadowColor: defaultTokens.paletteInkDark,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    android: {
      elevation: 1,
    },
  },
});

export default createFragmentContainer(SingleMap, {
  hotel: graphql`
    fragment SingleMap_hotel on HotelAvailabilityInterface {
      hotel {
        ...MapView_hotel
      }
      ...AdditionalInfo_data
    }
  `,
});
