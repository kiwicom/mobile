// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation, Alert } from '@kiwicom/mobile-localization';
import {
  TextInput,
  StyleSheet,
  TextIcon,
  type StylePropType,
  TouchableWithoutFeedback,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onSecurityCodeChange: (securityCode: string) => void,
  +inputWrapperStyle?: StylePropType,
  +placeholder?: React.Element<typeof Translation>,
  +placeholderStyle?: StylePropType,
  +displayLabel: boolean,
|};

export default class SecurityCodeInput extends React.Component<Props> {
  static defaultProps = {
    displayLabel: true,
  };
  onPress = () => {
    Alert.translatedAlert(
      { id: 'mmb.trip_services.insurance.payment.security_code' },
      {
        id: 'mmb.trip_services.insurance.payment.security_code.alert_message',
      },
    );
  };

  render() {
    let label;
    let helpIconOffset;
    if (this.props.displayLabel) {
      label = (
        <Translation id="mmb.trip_services.insurance.payment.security_code" />
      );
      helpIconOffset = styles.helpIconOffset;
    }
    let placeholderProps;
    if (this.props.placeholder != null) {
      placeholderProps = {
        placeholder: this.props.placeholder,
        placeholderStyle: this.props.placeholderStyle,
      };
    }
    return (
      <React.Fragment>
        <TextInput
          label={label}
          onChangeText={this.props.onSecurityCodeChange}
          keyboardType="numeric"
          maxLength={4}
          inputWrapperStyle={this.props.inputWrapperStyle}
          {...placeholderProps}
        />
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={[styles.helpIcon, helpIconOffset]}>
            <TextIcon code="F" style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  helpIcon: {
    position: 'absolute',
    end: 0,
    padding: 10,
  },
  helpIconOffset: {
    end: 15,
    bottom: 2.5,
  },
  icon: {
    color: defaultTokens.paletteProductNormal,
    fontSize: 16,
  },
});
