// @flow

import * as React from 'react';
import { Image } from 'react-native';

import type { StylePropType } from '../../types/Styles';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +source: number,
  +style?: StylePropType,
|};

export default function StretchedImage(props: Props) {
  // $FlowFixMe Errors after moving rn modules from untyped to declarations
  return <Image source={props.source} resizeMode="stretch" style={[styles.image, props.style]} />;
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
});
