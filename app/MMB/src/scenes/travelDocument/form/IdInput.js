// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import {
  Text,
  TextInput,
  StyleSheet,
  ErrorMessage,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TravelDocumentFormContext from './TravelDocumentFormContext';

const IdInput = () => (
  <TravelDocumentFormContext.Consumer>
    {({ idNumber, actions: { onIdNumberChange } }) => {
      const idNumberLength = idNumber.length;
      const showInputError = idNumberLength > 0 && idNumberLength < 5;
      return (
        <React.Fragment>
          <Text style={styles.label}>
            <Translation id="mmb.missing_informaiton.travel_document_modal_screen.passport_or_id_number" />
          </Text>
          <TextInput
            autoFocus={true}
            defaultValue={idNumber}
            onChangeText={onIdNumberChange}
          />
          {showInputError && (
            <ErrorMessage style={styles.error}>
              <Translation id="mmb.missing_informaiton.travel_document_modal_screen.id_number_error" />
            </ErrorMessage>
          )}
        </React.Fragment>
      );
    }}
  </TravelDocumentFormContext.Consumer>
);

const styles = StyleSheet.create({
  label: {
    color: defaultTokens.colorTextSecondary,
    marginBottom: 5,
  },
  error: {
    alignSelf: 'flex-end',
  },
});

export default IdInput;
