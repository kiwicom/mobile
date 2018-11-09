// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  CloseButton,
  Device,
  StretchedImage,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import MapView from './MapView';
import AdditionalInfo from './AdditionalInfo';
import gradient from '../gradient.png';
import type { SingleMap as HotelType } from './__generated__/SingleMap.graphql';

type Props = {|
  +goBack: () => void,
  +data: HotelType,
|};

const SingleMap = (props: Props) => {
  return (
    <View style={styles.container}>
      <MapView hotel={props.data.hotel} />
      <View style={styles.underlay}>
        <StretchedImage source={gradient} />
      </View>
      <View style={styles.dropShadow}>
        <AdditionalInfo data={props.data} />
      </View>
      <View style={styles.button}>
        <CloseButton onPress={props.goBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    position: 'absolute',
    bottom: Device.isIPhoneX ? 36 : 8,
    start: 8,
    end: 8,
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

export default createFragmentContainer(
  SingleMap,
  graphql`
    fragment SingleMap on HotelAvailabilityInterface {
      hotel {
        ...MapView_hotel
      }
      ...AdditionalInfo
    }
  `,
);
