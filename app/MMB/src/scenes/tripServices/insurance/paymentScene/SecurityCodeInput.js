// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { TextInput } from '@kiwicom/mobile-shared';

type Props = {|
  +onSecurityCodeChange: () => void,
|};

export default function SecurityCodeInput(props: Props) {
  return (
    <TextInput
      label={
        <Translation id="mmb.trip_services.insurance.payment.security_code" />
      }
      onChangeText={props.onSecurityCodeChange}
      keyboardType="numeric"
    />
  );
}
