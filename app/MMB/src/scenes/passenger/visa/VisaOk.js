// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import Alert from '../../../components/alert/Alert';

export default function VisaOk() {
  return (
    <Alert
      type="success"
      title={<Translation id="mmb.visa_state.no_visa_required" />}
    />
  );
}
