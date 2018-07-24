// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import IconWithText from './IconWithText';
import { type InsuranceType } from './variantButtons/__generated__/VariantButtons.graphql';

type Props = {|
  +selectedVariant: InsuranceType,
|};

const InsuranceSummary = (props: Props) => {
  switch (props.selectedVariant) {
    case 'TRAVEL_PLUS':
      return <TravelPlusSummary />;
    case 'TRAVEL_BASIC':
      return <TravelBasicSummary />;
    default:
      return null;
  }
};

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

export default InsuranceSummary;
