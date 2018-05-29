// @flow

import * as React from 'react';
import { Image } from 'react-native';

import type { StylePropType } from '../../types/Styles';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +source: string,
  +style?: StylePropType,
|};

export default function StretchedImage(props: Props) {
  return (
    <Image
      source={props.source}
      resizeMode="stretch"
      style={[styles.image, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
});
