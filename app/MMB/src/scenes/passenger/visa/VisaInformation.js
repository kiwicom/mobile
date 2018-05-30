// @flow

import * as React from 'react';

import VisaOk from './VisaOk';
import ManageMyBookingContext from '../../../context/BookingDetailContext';

type PropsWithContext = {|
  ...Props,
  +isPastBooking: boolean,
|};

export const VisaInformation = ({
  requiredIn,
  warningIn,
  isPastBooking,
  requiredComponent,
  warningComponent,
}: PropsWithContext) => {
  if (isPastBooking) {
    return null;
  }

  if (requiredIn.length === 0 && warningIn.length === 0) {
    return <VisaOk />;
  }

  const required = React.cloneElement(requiredComponent, {
    countries: requiredIn,
  });
  const warning = React.cloneElement(warningComponent, {
    countries: warningIn,
  });

  return (
    <React.Fragment>
      {required}
      {warning}
    </React.Fragment>
  );
};

type Props = {|
  +requiredIn: $ReadOnlyArray<string>,
  +warningIn: $ReadOnlyArray<string>,
  +requiredComponent: React.Element<*>,
  +warningComponent: React.Element<*>,
|};

const VisaInformationWithContext = (props: Props) => (
  <ManageMyBookingContext.Consumer>
    {({ isPastBooking }) => (
      <VisaInformation {...props} isPastBooking={isPastBooking} />
    )}
  </ManageMyBookingContext.Consumer>
);

export default VisaInformationWithContext;
