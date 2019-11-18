// @flow

import * as React from 'react';
import { View } from 'react-native';

import Popup from './Popup';
import TextButton from '../buttons/TextButton';
import StyleSheet from '../PlatformStyleSheet';
import CloseButton from '../buttons/CloseButton';
import type { TranslationType } from '../../types/Translation';

type Props = {|
  +buttonTitle: TranslationType,
  +children: React.Node,
  +isVisible: boolean,
  +onClose: Function,
  +onSave: Function,
  +style?: Object,
  +testID?: string,
|};

const POPUP_PADDING = 15;
const POPUP_BUTTONS_MARGIN = 10;

/**
 * Simple popup with confirmation button at the bottom.
 */
export default class ButtonPopup extends React.Component<Props> {
  onClose = () => this.props.onClose();

  onSave = () => this.props.onSave();

  render() {
    return (
      <Popup
        isVisible={this.props.isVisible}
        onClose={this.onClose}
        bottomContent={
          /* $FlowFixMe Errors after moving rn modules from untyped to
           * declarations */
          <View style={styles.buttonsWrapper}>
            {/* $FlowFixMe Errors after moving rn modules from untyped to
             * declarations */}
            <View style={[styles.button, styles.buttonFirst]}>
              <CloseButton onPress={this.onClose} />
            </View>
            {/* $FlowFixMe Errors after moving rn modules from untyped to
             * declarations */}
            <View style={styles.button}>
              <TextButton title={this.props.buttonTitle} onPress={this.onSave} type="primary" />
            </View>
          </View>
        }
      >
        {/* $FlowFixMe Errors after moving rn modules from untyped to
         * declarations */}
        <View style={[styles.content, this.props.style && this.props.style.content]}>
          {this.props.children}
        </View>
      </Popup>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: POPUP_PADDING,
    paddingBottom: 0,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  button: {
    margin: POPUP_BUTTONS_MARGIN,
    flex: 1,
  },
  buttonFirst: {
    marginEnd: 0,
  },
});
