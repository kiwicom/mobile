// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import IconWithText from './IconWithText';

const TravelBasicSummary = () => (
  <React.Fragment>
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.medical" />
      }
    />
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.cancellation" />
      }
    />
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.assistance" />
      }
    />
  </React.Fragment>
);

const TravelPlusSummary = () => (
  <React.Fragment>
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.medical" />
      }
    />
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.cancellation" />
      }
    />
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.assistance" />
      }
    />
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.bags" />
      }
    />
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.travel" />
      }
    />
    <IconWithText
      textIconCode="V"
      text={
        <Translation id="mmb.trip_services.insurance.selection.insurance_summary.liability" />
      }
    />
  </React.Fragment>
);

export { TravelPlusSummary, TravelBasicSummary };
