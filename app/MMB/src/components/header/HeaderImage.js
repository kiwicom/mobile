// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, NetworkImage } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import type { HeaderImage as HeaderImageType } from './__generated__/HeaderImage.graphql';

type Props = {|
  data: HeaderImageType,
|};

const HeaderImage = (props: Props) => (
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
  HeaderImage,
  graphql`
    fragment HeaderImage on Booking {
      destinationImageUrl(dimensions: _375x165)
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});
