// @flow

import * as React from 'react';
import Image from 'react-native-image-progress';
import { connect } from '@kiwicom/mobile-redux';
import type { StylePropType } from '@kiwicom/mobile-shared';

import MissingImage from './MissingImage';
import IconLoading from '../loaders/IconLoading';

type Props = {
  // not exact - accepts all additional props from 'Image' component
  source: {
    uri: ?string,
  },
  style?: StylePropType,
  dataSaverEnabled?: boolean,
};

/**
 * This is wrapper around original React Native image. It adds loading
 * indicator for network based images and it does strict sanitization of the
 * input arguments.
 *
 * Images are not being downloaded if the data saver is enabled.
 */
export const NetworkImage = function NetworkImage(imageProps: Props) {
  if (imageProps.dataSaverEnabled || !imageProps.source.uri) {
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
};

const select = ({ config }) => ({
  dataSaverEnabled: config.dataSaverEnabled,
});

export default connect(select)(NetworkImage);
