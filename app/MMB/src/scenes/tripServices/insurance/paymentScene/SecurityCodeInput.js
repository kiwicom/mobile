// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Translation, Alert } from '@kiwicom/mobile-localization';
import { TextInput, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onSecurityCodeChange: () => void,
|};

export default class SecurityCodeInput extends React.Component<Props> {
  onPress = () => {
    Alert.translatedAlert(
      { id: 'mmb.trip_services.insurance.payment.security_code' },
      {
        id: 'mmb.trip_services.insurance.payment.security_code.alert_message',
      },
    );
  };
  render() {
    return (
      <React.Fragment>
        <TextInput
          label={
            <Translation id="mmb.trip_services.insurance.payment.security_code" />
          }
          onChangeText={this.props.onSecurityCodeChange}
          keyboardType="numeric"
        />
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.helpIcon}>
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
    end: 15,
    bottom: 2.5,
    padding: 10,
  },
  icon: {
    color: defaultTokens.paletteProductNormal,
    fontSize: 16,
  },
});
