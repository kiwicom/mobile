// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import BookingDetailContext from '../../../../context/BookingDetailContext';
import type { FutureBookingInformation as BoardingPass } from './__generated__/FutureBookingInformation.graphql';

type PropsWithContext = {|
  ...Props,
  +isMissingPassengerId: boolean,
|};

export const FutureBookingInformation = (props: PropsWithContext) => {
  const isAvailable = Boolean(idx(props.data, _ => _.boardingPassUrl));

  if (!isAvailable && props.boardingPassAvailableDate !== null) {
    return (
      <Translation
        id="mmb.boarding_passes.future_booking_information.available_at_date"
        values={{ date: props.boardingPassAvailableDate }}
      />
    );
  }

  if (props.isMissingPassengerId) {
    return (
      <Translation id="mmb.boarding_passes.future_booking_information.missing_information" />
    );
  }
  return (
    <Translation id="mmb.boarding_passes.future_booking_information.available" />
  );
};

type Props = {|
  +data: BoardingPass,
  +boardingPassAvailableDate: Date | null,
|};

const FutureBookingInformationWithContext = (props: Props) => (
  <BookingDetailContext.Consumer>
    {({ isMissingDocumentId }) => (
      <FutureBookingInformation
        {...props}
        isMissingPassengerId={isMissingDocumentId}
      />
    )}
  </BookingDetailContext.Consumer>
);

export default createFragmentContainer(
  FutureBookingInformationWithContext,
  graphql`
    fragment FutureBookingInformation on BoardingPass {
      boardingPassUrl
    }
  `,
);
