// @flow

import * as React from 'react';
import Image from 'react-native-image-progress';
import type { StylePropType } from '@kiwicom/mobile-shared';
import { ConfigContext } from '@kiwicom/mobile-config';

import MissingImage from './MissingImage';

type Props = {|
  +source: {|
    +uri: ?string,
  |},
  +style?: StylePropType,
  +dataSaverEnabled?: boolean,
  +resizeMode?:
    | 'cover' // scales the image uniformly - image will be equal or larger
    | 'contain', // scales the image uniformly - image will be equal or smaller
  +indicator?: React.ElementType,
|};

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
    style: [
      imageProps.style,
      {
        overflow: 'hidden', // otherwise 'borderRadius' won't work
      },
    ],
  };

  return <Image {...newProps} />;
};

const DefaultIndicator = () => null;

NetworkImage.defaultProps = {
  indicator: DefaultIndicator,
};

export default function NetworkImageWithContext(props: Props) {
  return (
    <ConfigContext.Consumer>
      {({ dataSaverEnabled }) => (
        <NetworkImage {...props} dataSaverEnabled={dataSaverEnabled} />
      )}
    </ConfigContext.Consumer>
  );
}
