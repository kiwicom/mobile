// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, NetworkImage } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { DestinationImage as DestinationImageType } from './__generated__/DestinationImage.graphql';

type Props = {|
  +data: DestinationImageType,
|};

const DestinationImage = (props: Props) => (
  <View style={styles.container}>
    <NetworkImage
      source={{
        uri: idx(props.data, _ => _.destinationImageUrl),
      }}
      style={styles.image}
      resizeMode="cover"
    />
  </View>
);

export default createFragmentContainer(
  DestinationImage,
  graphql`
    fragment DestinationImage on BookingInterface {
      destinationImageUrl(dimensions: _375x165)
    }
  `,
);

const styles = StyleSheet.create({
  image: StyleSheet.absoluteFillObject,
  container: {
    backgroundColor: defaultTokens.paletteProductLight,
    height: 150,
    width: '100%',
    overflow: 'hidden',
  },
});
