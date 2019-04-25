// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Touchable, Translation } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { HotelCityItem_data as City } from './__generated__/HotelCityItem_data.graphql';
import {
  HotelsFormContext,
  type HotelsFormContextType,
} from '../HotelsFormContext';

type Props = {|
  +data: ?City,
  +onPress: () => void,
|};

const HotelCityItem = (props: Props) => {
  const {
    actions: { setCity },
  }: HotelsFormContextType = React.useContext(HotelsFormContext);

  function onPress() {
    const { data } = props;
    const cityId = data?.id;
    if (cityId != null) {
      setCity({
        cityId,
        cityName: data?.name ?? '',
        coordinates: {
          lng: data?.location?.lng ?? Number.MAX_SAFE_INTEGER,
          lat: data?.location?.lat ?? Number.MAX_SAFE_INTEGER,
        },
      });
      props.onPress();
    }
  }

  return (
    <Touchable onPress={onPress} style={styles.row}>
      <Translation passThrough={props.data?.name} />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 10,
    backgroundColor: defaultTokens.paletteCloudNormal,
    marginBottom: 8,
    borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
  },
});

export default createFragmentContainer(HotelCityItem, {
  data: graphql`
    fragment HotelCityItem_data on HotelCity {
      id
      name
      location {
        lat
        lng
      }
    }
  `,
});
