// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet, NetworkImage } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { Location as LocationDataType } from './__generated__/Location.graphql';

type Props = {|
  data: LocationDataType,
|};

function Location(props: Props) {
  const airport = idx(props, _ => _.data.airport);
  const cityName = idx(airport, _ => _.city.name);
  const countryFlagURL = idx(airport, _ => _.countryFlagURL);

  return (
    <View style={styleSheet.wrapper}>
      <NetworkImage source={{ uri: countryFlagURL }} style={styleSheet.image} />
      <Text style={styleSheet.city}>
        <Translation passThrough={cityName} />
      </Text>
    </View>
  );
}

export default createFragmentContainer(
  Location,
  graphql`
    fragment Location on RouteStop {
      airport {
        city {
          name
        }
        countryFlagURL
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  city: {
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: 21,
    height: 15,
    marginEnd: 11,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
