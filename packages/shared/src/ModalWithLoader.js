// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Modal from './Modal';
import IconLoading from './loaders/IconLoading';
import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../types/Styles';

// props not exact - additional properties allowed
type Props = {|
  +children: React.Node,
  +style?: StylePropType,
  +isVisible: boolean,

  // This function will be invoked when for example user presses back HW
  // button on Android. You should call here function to close this window.
  +onRequestClose: () => void,

  +backdropColor?: string,
  +backdropOpacity?: number,
  +onBackdropPress?: () => void,
|};

function ModalWithLoader({ children, ...rest }: Props) {
  return (
    <Modal {...rest}>
      {/* $FlowFixMe Errors after moving rn modules from untyped to
       * declarations */}
      <View style={styles.overlay}>
        {/* $FlowFixMe Errors after moving rn modules from untyped to
         * declarations */}
        <View style={styles.box}>
          <IconLoading />
          {/* $FlowFixMe Errors after moving rn modules from untyped to
           * declarations */}
          <View style={styles.message}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

Modal.defaultProps = {
  backdropOpacity: 0.5,
};

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: defaultTokens.paletteWhite,
    borderRadius: 4,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  message: {
    paddingTop: 20,
  },
});

export default ModalWithLoader;
