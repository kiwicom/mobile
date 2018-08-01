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
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import max from 'lodash/max';
import idx from 'idx';

import TravelDocumentFormContext from '../TravelDocumentFormContext';
import type { ExpiryDatePicker as SegmentsType } from './__generated__/ExpiryDatePicker.graphql';

type PropsWithContext = {|
  ...Props,
  +noExpiry: boolean,
  +expiryDate: Date | null,
  +onDateChange: (date: Date) => void,
  +onNoExpiryChange: (expiry: boolean) => void,
|};

export const ExpiryDatePicker = (props: PropsWithContext) => {
  const segments = idx(props, _ => _.data.legs) || [];
  const minDate = max(
    segments.map(item => new Date(idx(item, _ => _.departure.time) || 0)),
  );
  return (
    <React.Fragment>
      <Text
        style={[styles.label, props.noExpiry ? styles.noExpiry : styles.expiry]}
      >
        <Translation id="mmb.missing_informaiton.travel_document_modal_screen.passport_or_id_expiry" />
      </Text>
      <View style={styles.row}>
        <View style={styles.datePickerContainer}>
          <DatePicker
            date={props.expiryDate}
            onDateChange={props.onDateChange}
            minDate={minDate}
            formatFunction="formatToBirthday"
            disabled={props.noExpiry}
          />
        </View>
        <View style={[styles.row, styles.switchContainer]}>
          <Text style={[styles.label, styles.switchText]}>
            <Translation id="mmb.missing_informaiton.travel_document_modal_screen.no_expiry" />
          </Text>
          <Switch
            value={props.noExpiry}
            onValueChange={props.onNoExpiryChange}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

type Props = {|
  +data: SegmentsType,
|};

const ExpiryDatePickerWithContext = (props: Props) => (
  <TravelDocumentFormContext.Consumer>
    {({
      noExpiry,
      expiryDate,
      actions: { onDateChange, onNoExpiryChange },
    }) => (
      <ExpiryDatePicker
        {...props}
        noExpiry={noExpiry}
        expiryDate={expiryDate}
        onDateChange={onDateChange}
        onNoExpiryChange={onNoExpiryChange}
      />
    )}
  </TravelDocumentFormContext.Consumer>
);

export default createFragmentContainer(
  ExpiryDatePickerWithContext,
  graphql`
    fragment ExpiryDatePicker on Trip {
      legs {
        departure {
          time
        }
      }
    }
  `,
);

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
