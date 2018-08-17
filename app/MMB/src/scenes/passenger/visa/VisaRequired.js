// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';

import Alert from '../../../components/alert/Alert';

type Props = {|
  +countries: $ReadOnlyArray<string>,
|};

export default function VisaRequired(props: Props) {
  if (props.countries.length === 0) {
    return null;
  }
  return (
    <Alert
      type="danger"
      title={<Translation id="mmb.visa_state.visa_is_required_in" />}
    >
      {props.countries.map(country => (
        <Text key={country} style={styles.country}>
          <Translation passThrough={country} />
        </Text>
      ))}
    </Alert>
  );
}

const styles = StyleSheet.create({
  country: {
    fontSize: 12,
    color: Color.red.monza, // TODO: Consult designer
    fontWeight: '600',
  },
});
