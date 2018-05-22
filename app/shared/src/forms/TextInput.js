// @flow

import * as React from 'react';
import { TextInput as OriginalTextInput, View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';

import StyleSheet from '../PlatformStyleSheet';
import Icon from '../icons/Icon';
import Color from '../Color';
import Text from '../Text';

type Props = {|
  placeholder?: React.Element<typeof Translation>,
  value?: string,
  autoFocus?: boolean,
  iconName?: string, // only Material icons allowed here
  onChangeText?: (text: string) => void,
  keyboardType?: 'email-address',
  secureTextEntry?: boolean,
|};

type State = {|
  displayPlaceholder: boolean,
|};

export default class TextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayPlaceholder: props.value == null || props.value === '',
    };
  }

  static getDerivedStateFromProps = (nextProps: Props) => {
    return {
      displayPlaceholder: nextProps.value == null || nextProps.value === '',
    };
  };

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
      {this.props.iconName && (
        <Icon name={this.props.iconName} size={20} style={styleSheet.icon} />
      )}

      <OriginalTextInput
        placeholderTextColor={Color.textLight}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        {...this.props}
        placeholder={null}
        onChangeText={this.handlePlaceholder}
        style={[styleSheet.text, styleSheet.input]}
      />

      {this.props.placeholder &&
        this.state.displayPlaceholder && (
          <Text style={[styleSheet.text, styleSheet.placeholder]}>
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
    color: Color.textDark,
    backgroundColor: Color.inputBackground,
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
  icon: {
    marginLeft: 10,
    alignSelf: 'center',
  },
  placeholder: {
    position: 'absolute',
    padding: 10,
    paddingVertical: 15,
    color: Color.textLight,
  },
});
