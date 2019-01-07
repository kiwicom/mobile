// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import FutureBookingInformation from './FutureBookingInformation';
import BookingDetailContext from '../../../../context/BookingDetailContext';
import PastBookingInformation from './PastBookingInformation';
import type { BoardingPassInformation as BoardingPass } from './__generated__/BoardingPassInformation.graphql';

type PropsWithContext = {|
  ...Props,
  +isPastBooking: boolean,
|};

const BoardingPassInformation = ({ data, isPastBooking }: PropsWithContext) => {
  const availableAt = data.availableAt ?? '';
  const [year, month, day] = availableAt.split('-');
  const boardingPassAvailableDate = availableAt
    ? new Date(
        Date.UTC(
          parseInt(year, 10),
          parseInt(month, 10) - 1,
          parseInt(day, 10),
        ),
      )
    : null;

  if (isPastBooking) {
    return (
      <PastBookingInformation
        boardingPassAvailableDate={boardingPassAvailableDate}
        boardingPassUrl={data.boardingPassUrl}
      />
    );
  }

  return (
    <FutureBookingInformation
      boardingPassAvailableDate={boardingPassAvailableDate}
      data={data}
    />
  );
};

type Props = {|
  +data: BoardingPass,
|};

const BoardingPassInformationWithContext = (props: Props) => (
  <BookingDetailContext.Consumer>
    {({ isPastBooking }) => (
      <BoardingPassInformation {...props} isPastBooking={isPastBooking} />
    )}
  </BookingDetailContext.Consumer>
);

export default createFragmentContainer(
  BoardingPassInformationWithContext,
  graphql`
    fragment BoardingPassInformation on BoardingPass {
      availableAt
      boardingPassUrl
      ...FutureBookingInformation
    }
  `,
);
