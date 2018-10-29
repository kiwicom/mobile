// @flow

import * as React from 'react';
import { Platform, View } from 'react-native';
import {
  Touchable,
  StyleSheet,
  Text,
  TextIcon,
  type StylePropType,
} from '@kiwicom/mobile-shared';
import {
  type TranslationType,
  Translation,
} from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onPress: () => void,
  +onLongPress?: (React.ElementRef<typeof Touchable>) => void,
  +children:
    | React.Element<typeof HeaderButton.Text>
    | React.Element<typeof TextIcon>,
  +left?: boolean,
  +style?: StylePropType,
  +disabled?: boolean,
  +testID?: string,
|};

type State = {|
  reference: React.ElementRef<typeof Touchable> | null,
|};

type CloseModalProps = {|
  +onPress: () => void,
  +text?: TranslationType,
|};

export default class HeaderButton extends React.PureComponent<Props, State> {
  static Right = (props: Props) => (
    <HeaderButton {...props} style={[props.style, styles.right]} />
  );

  static Left = (props: Props) => (
    <HeaderButton {...props} style={[props.style, styles.left]} />
  );

  static Text = ({
    children,
    disabled,
  }: {|
    +children: TranslationType,
    +disabled?: boolean,
  |}) => (
    <Text
      style={[styles.headerButtonText, disabled ? styles.disabledButton : null]}
    >
      {Platform.OS === 'android'
        ? React.cloneElement(children, {
            textTransform: 'uppercase',
          })
        : children}
    </Text>
  );

  static CloseModal = ({ onPress, text }: CloseModalProps) => (
    <HeaderButton.Left onPress={onPress}>
      {Platform.OS === 'android' ? (
        <TextIcon code="X" style={styles.closeIcon} />
      ) : (
        <HeaderButton.Text>
          {text || <Translation id="shared.button.close" />}
        </HeaderButton.Text>
      )}
    </HeaderButton.Left>
  );

  static defaultProps = {
    disabled: false,
  };

  state = {
    reference: null,
  };

  storeReference = (reference: React.ElementRef<typeof Touchable> | null) => {
    this.setState({ reference });
  };

  onLongPress = () => {
    if (this.state.reference !== null && this.props.onLongPress !== undefined) {
      this.props.onLongPress(this.state.reference);
    }
  };

  render = () => {
    const { disabled, onPress, style, testID } = this.props;

    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityTraits="button"
        delayPressIn={0}
        onPress={onPress}
        style={styles.container}
        borderlessRipple={true}
        onLongPress={this.onLongPress}
        ref={this.storeReference}
        disabled={disabled}
        testID={testID}
      >
        <View style={styles.container}>
          <View style={[styles.innerContainer, style]}>
            {this.props.children.type === HeaderButton.Text
              ? // $FlowExpectedError: flow is having a hard time here
                React.cloneElement(this.props.children, { disabled })
              : this.props.children}
          </View>
        </View>
      </Touchable>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  innerContainer: {
    ios: {
      paddingVertical: 8,
    },
    android: {
      margin: 16,
    },
  },
  right: {
    ios: {
      marginStart: 22,
      marginEnd: 10,
    },
  },
  left: {
    ios: {
      marginStart: 10,
      marginEnd: 22,
    },
  },
  headerButtonText: {
    color: defaultTokens.paletteProductNormal,
    ios: {
      fontSize: 17,
    },
    android: {
      fontWeight: '600',
    },
  },
  disabledButton: {
    color: defaultTokens.paletteCloudNormal,
  },
  closeIcon: {
    fontSize: 24,
    color: defaultTokens.paletteProductNormal,
  },
});

HeaderButton.Left.displayName = 'HeaderButton.Left';
HeaderButton.Right.displayName = 'HeaderButton.Right';
HeaderButton.Text.displayName = 'HeaderButton.Text';
