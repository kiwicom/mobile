// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { TextInput } from '@kiwicom/mobile-shared';

type Props = {|
  +onCardholdersNameChange: () => void,
|};

export default function CardholdersNameInput(props: Props) {
  return (
    <TextInput
      label={
        <Translation id="mmb.trip_services.insurance.payment.cardholders_name" />
      }
      onChangeText={props.onCardholdersNameChange}
    />
  );
}
