// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Image } from 'react-native';

import type { AirlineLogo } from './__generated__/AirlineLogo.graphql';

type Props = {|
  data: AirlineLogo,
|};

const styles = {
  width: 16,
  height: 16,
  marginRight: 5,
};

export const AirlineLogoData = ({ data }: Props) => {
  return <Image style={styles} source={{ uri: data.logoUrl }} />;
};

export default createFragmentContainer(
  AirlineLogoData,
  graphql`
    fragment AirlineLogo on Airline {
      logoUrl
    }
  `,
);
