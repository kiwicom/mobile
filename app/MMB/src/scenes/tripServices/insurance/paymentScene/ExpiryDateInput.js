// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, TextInput, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +expiryDate: { +month: string, +year: string },
  +onExpiryDateChange: (expiryDate: {|
    +month: string,
    +year: string,
  |}) => void,
|};

export default class ExpiryDateInput extends React.Component<Props> {
  updateMonth = (month: string) => {
    this.props.onExpiryDateChange({ ...this.props.expiryDate, month });
  };

  updateYear = (year: string) => {
    this.props.onExpiryDateChange({ ...this.props.expiryDate, year });
  };

  render() {
    return (
      <React.Fragment>
        <Text style={styles.header}>
          <Translation id="mmb.trip_services.insurance.payment.expiry_date" />
        </Text>
        <View style={styles.row}>
          <View style={styles.month}>
            <TextInput
              placeholder={
                <Translation id="mmb.trip_services.insurance.payment.month" />
              }
              onChangeText={this.updateMonth}
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.separator}>
            <Translation passThrough=" / " />
          </Text>
          <View style={styles.year}>
            <TextInput
              placeholder={
                <Translation id="mmb.trip_services.insurance.payment.year" />
              }
              onChangeText={this.updateYear}
              keyboardType="numeric"
            />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: defaultTokens.colorTextSecondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  month: {
    flexGrow: 1,
  },
  year: {
    flexGrow: 1,
    marginEnd: 10,
  },
  separator: {
    fontSize: 15,
  },
});
