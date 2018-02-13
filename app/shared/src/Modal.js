// @flow

import * as React from 'react';
import ReactModal from 'react-native-modal';

type Props = {
  // not exact - additional properties allowed
  children: React.Node,
};

/**
 * This is just a wrapper with default setting so it's going to be easy to
 * replace in in the future (if necessary).
 */
export default function Modal(props: Props) {
  return (
    <ReactModal
      // NOTE: do not use native driver (see: https://github.com/react-native-community/react-native-modal/issues/92)
      supportedOrientations={['portrait', 'landscape']} // iOS only
      animationInTiming={150}
      animationOutTiming={150}
      {...props}
    />
  );
}
