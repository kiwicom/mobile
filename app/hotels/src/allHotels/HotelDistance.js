// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { HotelDistance_hotel } from './__generated__/HotelDistance_hotel.graphql';

type Props = {|
  +hotel: HotelDistance_hotel,
|};

// 1.5 km city center radius
const CITY_CENTER_RADIUS = 1.5;

function HotelDistance({ hotel }: Props) {
  const distance = hotel.distanceFromCenter ?? null;

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
  let distanceText = <Translation passThrough="" />;

  if (distanceFromCenter <= cityCenterRadius) {
    distanceText = (
      <Translation id="hotels_search.hotel_distance.in_city_center" />
    );
  } else if (distanceFromCityCenter < 1) {
    // 1 km from city center radius shows in meters
    // Round up to 100 m
    const distanceInMeters = distanceFromCityCenter * 1000;
    const roundedDistanceInMeters = 100 * Math.ceil(distanceInMeters / 100);
    distanceText = (
      <Translation
        id="hotels_search.hotel_distance.meters_from_center"
        values={{ distance: roundedDistanceInMeters }}
      />
    );
  } else {
    distanceText = (
      <Translation
        id="hotels_search.hotel_distance.kilo_meters_from_center"
        values={{ distance: distanceFromCityCenter.toFixed(1) }}
      />
    );
  }

  return distanceText;
}

const style = StyleSheet.create({
  text: {
    letterSpacing: 0.2,
    color: defaultTokens.colorTextSecondary,
    fontSize: 12,
    lineHeight: 15,
  },
});

export default createFragmentContainer(
  HotelDistance,
  graphql`
    fragment HotelDistance_hotel on AllHotelsInterface {
      distanceFromCenter
    }
  `,
);
