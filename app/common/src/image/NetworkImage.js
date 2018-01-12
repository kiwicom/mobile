// @flow

import * as React from 'react';
import Image from 'react-native-image-progress';
import { IconLoading } from '@kiwicom/react-native-app-common';

import MissingImage from './MissingImage';

/**
 * This is wrapper around original React Native image. It adds loading indicator for
 * network based images and it does strict sanitization of the input arguments.
 */
export default function NetworkImage(imageProps: Object) {
  if (!imageProps.source.uri) {
    return <MissingImage {...imageProps} />;
  }

  const newProps = {
    ...imageProps,
    indicator: IconLoading,
    style: [
      imageProps.style,
      {
        overflow: 'hidden', // otherwise 'borderRadius' won't work
      },
    ],
  };
  return <Image {...newProps} />;
}
