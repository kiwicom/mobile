// @flow

import * as React from 'react';
import Image from 'react-native-image-progress';

import MissingImage from './MissingImage';

/**
 * This is wrapper around original React Native image. It adds loading indicator for
 * network based images and it does strict sanitization of the input arguments.
 */
export default function NetworkImage(imageProps: Object) {
  if (!imageProps.source.uri) {
    return <MissingImage {...imageProps} />;
  }
  return <Image {...imageProps} />;
}
