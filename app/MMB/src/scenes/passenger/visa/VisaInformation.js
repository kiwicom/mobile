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
  children,
}: PropsWithContext) => {
  if (isPastBooking) {
    return null;
  }

  if (requiredIn.length === 0 && warningIn.length === 0) {
    return <VisaOk />;
  }

  return children;
};

type Props = {|
  +requiredIn: $ReadOnlyArray<string>,
  +warningIn: $ReadOnlyArray<string>,
  +children: React.Node,
|};

const VisaInformationWithContext = (props: Props) => (
  <ManageMyBookingContext.Consumer>
    {({ isPastBooking }) => (
      <VisaInformation {...props} isPastBooking={isPastBooking} />
    )}
  </ManageMyBookingContext.Consumer>
);

export default VisaInformationWithContext;
