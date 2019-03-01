// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Text, StyleSheet, ReadMore, Logger } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import DescriptionTitle from './DescriptionTitle';
import Amenities from './Amenities';
import type { Description_hotel as HotelType } from './__generated__/Description_hotel.graphql';

type Props = {
  +hotel: ?HotelType,
  +locationView?: React.Node,
};

export const Description = (props: Props) => (
  <View style={styles.container}>
    <DescriptionTitle
      title={<Translation id="single_hotel.description.description" />}
    />
    <ReadMore
      numberOfLines={5}
      truncatedText={<Translation id="single_hotel.description.show_more" />}
      revealedText={<Translation id="single_hotel.description.show_less" />}
      onExpandText={Logger.hotelsDetailDescriptionExpanded}
    >
      <Text style={styles.summary}>
        <Translation passThrough={props.hotel?.summary} />
      </Text>
    </ReadMore>
    <Amenities data={props.hotel} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: defaultTokens.paletteWhite,
  },
  summary: {
    android: {
      lineHeight: 21,
    },
    ios: {
      lineHeight: 19,
    },
  },
});

export default createFragmentContainer(
  Description,
  graphql`
    fragment Description_hotel on HotelInterface {
      summary
      ...Amenities
    }
  `,
);
