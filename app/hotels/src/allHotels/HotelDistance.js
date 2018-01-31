// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Text, StyleSheet } from 'react-native';
import idx from 'idx';
import { Color } from '@kiwicom/react-native-app-common';

import type { HotelDistance_hotel } from './__generated__/HotelDistance_hotel.graphql';

type Props = {|
  hotel: HotelDistance_hotel,
|};

const style = StyleSheet.create({
  text: {
    color: Color.grey.$600,
  },
});

// 1.5 km city center radius
const CITY_CENTER_RADIUS = 1.5;

function HotelDistance({ hotel }: Props) {
  const distance = idx(hotel, _ => _.distanceFromCenter) || null;
  if (distance === null) {
    return null;
  }

  return (
    <Text style={style.text}>
      {getDistanceText(distance, CITY_CENTER_RADIUS)}
    </Text>
  );
}

export function getDistanceText(
  distanceFromCenter: number,
  cityCenterRadius: number,
) {
  const distanceFromCityCenter = distanceFromCenter - cityCenterRadius;
  let distanceText = '';

  if (distanceFromCenter <= cityCenterRadius) {
    distanceText = 'In the city center';
  } else if (distanceFromCityCenter < 1) {
    // 1 km from city center radius shows in meters
    // Round up to 100 m
    const distanceInMeters = distanceFromCityCenter * 1000;
    const roundedDistanceInMeters = 100 * Math.ceil(distanceInMeters / 100);
    distanceText = `${roundedDistanceInMeters}m from center`;
  } else {
    distanceText = `${distanceFromCityCenter.toFixed(1)}km from center`;
  }

  return distanceText;
}

export default createFragmentContainer(
  HotelDistance,
  graphql`
    fragment HotelDistance_hotel on Hotel {
      distanceFromCenter
    }
  `,
);
