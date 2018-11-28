// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';

import CountryFlag from '../CountryFlag';
import type { Location as LocationDataType } from './__generated__/Location.graphql';

type Props = {|
  data: LocationDataType,
|};

function Location(props: Props) {
  const airport = props.data.airport;
  const cityName = airport?.city?.name;

  return (
    <View style={styleSheet.wrapper}>
      <CountryFlag data={airport} />
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
        ...CountryFlag
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  city: {
    fontSize: 16,
    fontWeight: '600',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
