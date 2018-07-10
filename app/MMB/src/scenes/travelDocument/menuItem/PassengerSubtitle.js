// @flow strict

import * as React from 'react';
import { StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';

type Props = {|
  +expirationDate: Date | null,
  +idNumber: string | null,
|};

export default function PassengerSubtitle(props: Props) {
  if (props.expirationDate === null && props.idNumber === null) {
    return null;
  }
  const expirationDate = props.expirationDate
    ? DateFormatter(new Date(props.expirationDate)).formatToBirthday()
    : '';
  return (
    <Text style={styles.documentText}>
      <Translation passThrough={`${props.idNumber || ''} ${expirationDate}`} />
    </Text>
  );
}

const styles = StyleSheet.create({
  documentText: {
    color: Color.textLight,
  },
});
