// @flow strict

import * as React from 'react';
import { TextInput as OriginalTextInput, View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from '../PlatformStyleSheet';
import Text from '../Text';

type Props = {|
  +placeholder?: React.Element<typeof Translation>,
  +defaultValue?: string,
  +autoFocus?: boolean,
  +onChangeText?: (text: string) => void,
  +keyboardType?: 'email-address',
  +secureTextEntry?: boolean,
|};

type State = {|
  displayPlaceholder: boolean,
|};

export default class TextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      displayPlaceholder: defaultValue == null || defaultValue === '',
    };
  }

  handlePlaceholder = (text: string) => {
    this.setState(
      {
        displayPlaceholder: text === '',
      },
      () => {
        if (this.props.onChangeText) {
          this.props.onChangeText(text);
        }
      },
    );
  };

  render = () => (
    <View style={styleSheet.wrapper}>
      <OriginalTextInput
        underlineColorAndroid="transparent"
        autoCorrect={false}
        {...this.props}
        placeholder={null}
        onChangeText={this.handlePlaceholder}
        style={[styleSheet.text, styleSheet.input]}
      />

      {this.props.placeholder &&
        this.state.displayPlaceholder && (
          <Text
            style={[styleSheet.text, styleSheet.placeholder]}
            pointerEvents="none"
          >
            {this.props.placeholder}
          </Text>
        )}
    </View>
  );
}

const styleSheet = StyleSheet.create({
  text: {
    android: {
      fontSize: 16,
    },
    ios: {
      fontSize: 14,
    },
  },
  input: {
    flex: 1,
    color: defaultTokens.colorTextAttention,
    backgroundColor: defaultTokens.paletteCloudNormal,
    borderRadius: 6,
    padding: 10,
  },
  wrapper: {
    flexDirection: 'row',
    android: {
      elevation: 1,
      height: 48,
    },
    ios: {
      height: 47,
    },
  },
  placeholder: {
    position: 'absolute',
    padding: 10,
    paddingVertical: 15,
    color: defaultTokens.colorTextSecondary,
  },
});
