// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import VisaRequired from './VisaRequired';
import VisaOk from './VisaOk';
import VisaWarning from './VisaWarning';
import type { VisaInformation_visa as VisaType } from './__generated__/VisaInformation_visa.graphql';
import ManageMyBookingContext from '../../../context/BookingDetailContext';

type PropsWithContext = {|
  ...Props,
  +isPastBooking: boolean,
|};

export const VisaInformation = (props: PropsWithContext) => {
  const requiredIn = idx(props.visa, _ => _.visaInformation.requiredIn) || [];
  const warningIn = idx(props.visa, _ => _.visaInformation.warningIn) || [];

  if (props.isPastBooking) {
    return null;
  }

  if (requiredIn.length === 0 && warningIn.length === 0) {
    return <VisaOk />;
  }

  return (
    <React.Fragment>
      <VisaRequired
        countries={requiredIn.map(country => idx(country, _ => _.name) || '')}
      />
      <VisaWarning
        countries={warningIn.map(country => idx(country, _ => _.name) || '')}
      />
    </React.Fragment>
  );
};

type Props = {|
  +visa: VisaType,
|};

const VisaInformationWithContext = (props: Props) => (
  <ManageMyBookingContext.Consumer>
    {({ isPastBooking }) => (
      <VisaInformation {...props} isPastBooking={isPastBooking} />
    )}
  </ManageMyBookingContext.Consumer>
);

export default createFragmentContainer(
  VisaInformationWithContext,
  graphql`
    fragment VisaInformation_visa on Passenger {
      visaInformation {
        requiredIn {
          name
        }
        warningIn {
          name
        }
      }
    }
  `,
);
