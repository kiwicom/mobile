// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { Text } from '@kiwicom/mobile-shared';

import type { InsuranceType } from './__generated__/PassengerInsuranceMenuItem.graphql';

type Props = {|
  +insuranceType: ?InsuranceType,
|};

export default function PassengerMenuRightContent(props: Props) {
  if (props.insuranceType === 'NONE') {
    return (
      <Text>
        <Translation id="mmb.trip_services.insurance.variant.none" />
      </Text>
    );
  } else if (props.insuranceType === 'TRAVEL_BASIC') {
    return (
      <Text>
        <Translation id="mmb.trip_services.insurance.variant.basic" />
      </Text>
    );
  } else if (props.insuranceType === 'TRAVEL_PLUS') {
    return (
      <Text>
        <Translation id="mmb.trip_services.insurance.variant.plus" />
      </Text>
    );
  }
  return null;
}
