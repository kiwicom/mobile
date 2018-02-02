// @flow

import * as React from 'react';
import { Image } from 'react-native';

export default function missingImage(imageProps: Object) {
  return (
    <Image {...imageProps} source={require('./assets/placeholders/100.png')} />
  );
}
