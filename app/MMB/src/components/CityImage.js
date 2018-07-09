// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  NetworkImage,
  type StylePropType,
} from '@kiwicom/mobile-shared';

type Props = {|
  +url: ?string,
  +style?: StylePropType,
|};

export default function CityImage(props: Props) {
  return (
    <NetworkImage
      source={{
        uri: props.url,
      }}
      style={[styles.image, props.style]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});
