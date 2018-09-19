// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Text, StyleSheet, ReadMore } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Facilities from './Facilities';
import type { Description_hotel } from './__generated__/Description_hotel.graphql';

type ContainerProps = {|
  +hotel: any,
  +locationView?: any,
|};

type Props = {
  ...ContainerProps,
  +hotel: ?Description_hotel,
  +locationView?: React.Node,
};

export const Description = (props: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      <Translation
        id="single_hotel.description.description"
        textTransform="uppercase"
      />
    </Text>
    <ReadMore
      numberOfLines={5}
      truncatedText={<Translation id="single_hotel.description.show_more" />}
      revealedText={<Translation id="single_hotel.description.show_less" />}
    >
      <Text style={styles.summary}>
        <Translation passThrough={idx(props, _ => _.hotel.summary)} />
      </Text>
    </ReadMore>
    <Facilities facilities={idx(props, _ => _.hotel.facilities)} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: defaultTokens.paletteWhite,
  },
  title: {
    color: defaultTokens.colorTextSecondary,
    marginBottom: 8,
    fontWeight: '800',
    fontSize: 12,
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

export default (createFragmentContainer(
  Description,
  graphql`
    fragment Description_hotel on Hotel {
      summary
      facilities {
        ...Facilities_facilities
      }
    }
  `,
): React.ComponentType<ContainerProps>);
