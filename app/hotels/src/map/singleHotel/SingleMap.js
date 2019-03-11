// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, StretchedImage } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import MapView from './MapView';
import AdditionalInfo from './AdditionalInfo';
import gradient from '../gradient.png';
import type { SingleMap_hotel as HotelType } from './__generated__/SingleMap_hotel.graphql';
import CloseModal from '../../components/CloseModal';

type Props = {|
  +hotel: ?HotelType,
  +navigation: NavigationType,
|};

const SingleMap = (props: Props) => {
  function goBack() {
    props.navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <MapView hotel={props.hotel?.hotel} />
      <View style={styles.underlay}>
        <StretchedImage source={gradient} />
      </View>
      <View style={styles.dropShadow}>
        <AdditionalInfo data={props.hotel} />
      </View>
      <CloseModal onPress={goBack} />
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

export default createFragmentContainer(withNavigation(SingleMap), {
  hotel: graphql`
    fragment SingleMap_hotel on HotelAvailabilityInterface {
      hotel {
        ...MapView_hotel
      }
      ...AdditionalInfo_data
    }
  `,
});
