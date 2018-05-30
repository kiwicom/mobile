// @flow

import * as React from 'react';
import { StyleSheet, NetworkImage } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import HeaderPlaceholder from './HeaderPlaceholder';
import type { HeaderImage as HeaderImageType } from './__generated__/HeaderImage.graphql';

type Props = {|
  +data: HeaderImageType,
|};

const HeaderImage = (props: Props) => (
  <HeaderPlaceholder>
    <NetworkImage
      source={{
        uri: idx(props.data, _ => _.destinationImageUrl),
      }}
      style={styles.image}
      resizeMode="cover"
    />
  </HeaderPlaceholder>
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
  image: StyleSheet.absoluteFillObject,
});
