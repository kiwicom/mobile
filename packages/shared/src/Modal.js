// @flow

import * as React from 'react';
import ReactModal from 'react-native-modal';

import type { StylePropType } from '../index';

// props not exact - additional properties allowed
type Props = {|
  children: React.Node,
  style: StylePropType,
  isVisible: boolean,

  // This function will be invoked when for example user presses back HW
  // button on Android. You should call here function to close this window.
  onRequestClose: () => void,

  backdropColor?: string,
  backdropOpacity?: number,
  onBackdropPress?: () => void,
|};

/**
 * This is just a wrapper with default setting so it's going to be easy to
 * replace in in the future (if necessary).
 */
function Modal(props: Props) {
  return (
    <ReactModal
      supportedOrientations={['portrait', 'landscape']} // iOS only
      animationInTiming={150}
      animationOutTiming={150}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true} // this is workaround for `useNativeDriver` property (see: https://github.com/react-native-community/react-native-modal#the-modal-flashes-in-a-weird-way-when-animating)
      {...props}
    />
  );
}

Modal.defaultProps = {
  backdropOpacity: 0.5,
};

export default Modal;
