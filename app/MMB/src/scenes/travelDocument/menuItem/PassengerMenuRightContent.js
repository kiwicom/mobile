// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, Color, Text } from '@kiwicom/mobile-shared';

type Props = {|
  +idNumber: string | null,
|};

export default function PassengerMenuRightContent(props: Props) {
  if (props.idNumber === null) {
    return (
      <Text style={styles.missing}>
        <Translation id="mmb.missing_information.passenger_menu_right.not_filled" />
      </Text>
    );
  }
  return (
    <Text style={styles.filled}>
      <Translation id="mmb.missing_information.passenger_menu_right.filled" />
    </Text>
  );
}

const styles = StyleSheet.create({
  missing: {
    color: Color.red.normal,
  },
  filled: {
    color: Color.green.normal,
  },
});
