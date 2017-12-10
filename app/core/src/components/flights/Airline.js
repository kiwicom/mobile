// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text, View } from 'react-native';

import AirlineLogo from './AirlineLogo';

type Props = {|
  data: AirlineLogo,
|};

export const AirlineLogoData = ({ data }: Props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <AirlineLogo data={data} />
      <Text>
        {data.name} ({data.code})
      </Text>
    </View>
  );
};

export default createFragmentContainer(
  AirlineLogoData,
  graphql`
    fragment Airline on Airline {
      name
      code
      ...AirlineLogo
    }
  `,
);
