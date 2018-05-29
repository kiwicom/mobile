// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, NetworkImage } from '@kiwicom/mobile-shared';

import type { CountryFlag as CountryFlagType } from './__generated__/CountryFlag.graphql';

type Props = {|
  +data: CountryFlagType,
|};

function CountryFlag(props: Props) {
  return (
    <NetworkImage
      source={{ uri: props.data.countryFlagURL }}
      style={styleSheet.image}
    />
  );
}

export default createFragmentContainer(
  CountryFlag,
  graphql`
    fragment CountryFlag on Location {
      countryFlagURL
    }
  `,
);

const styleSheet = StyleSheet.create({
  image: {
    width: 21,
    height: 15,
    marginEnd: 11,
  },
});
