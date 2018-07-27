// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Color,
  DatePicker,
  Switch,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TravelDocumentFormContext from './TravelDocumentFormContext';

export default function ExpiryDatePicker() {
  return (
    <TravelDocumentFormContext.Consumer>
      {({
        noExpiry,
        expiryDate,
        actions: { onDateChange, onNoExpiryChange },
      }) => (
        <React.Fragment>
          <Text
            style={[styles.label, noExpiry ? styles.noExpiry : styles.expiry]}
          >
            <Translation id="mmb.missing_informaiton.travel_document_modal_screen.passport_or_id_expiry" />
          </Text>
          <View style={styles.row}>
            <View style={styles.datePickerContainer}>
              <DatePicker
                date={expiryDate}
                onDateChange={onDateChange}
                minDate={new Date()} // TODO: Should probably be the date of the last leg
                formatFunction="formatToBirthday"
                disabled={noExpiry}
              />
            </View>
            <View style={[styles.row, styles.switchContainer]}>
              <Text style={[styles.label, styles.switchText]}>
                <Translation id="mmb.missing_informaiton.travel_document_modal_screen.no_expiry" />
              </Text>
              <Switch value={noExpiry} onValueChange={onNoExpiryChange} />
            </View>
          </View>
        </React.Fragment>
      )}
    </TravelDocumentFormContext.Consumer>
  );
}

const styles = StyleSheet.create({
  noExpiry: {
    color: Color.labelDisabled,
  },
  expiry: {
    color: Color.textLight,
  },
  label: {
    color: Color.textLight,
    marginBottom: 5,
  },
  switchContainer: {
    alignItems: 'center',
  },
  switchText: {
    marginHorizontal: 5,
  },
  datePickerContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});
