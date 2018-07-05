// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import BookingDetailContext from '../../../../context/BookingDetailContext';
import PastBookingInformation from './PastBookingInformation';
import type { BoardingPassInformation as BoardingPass } from './__generated__/BoardingPassInformation.graphql';

type PropsWithContext = {|
  ...Props,
  +isPastBooking: boolean,
|};

const BoardingPassInformation = (props: PropsWithContext) => {
  const availableAt = idx(props.data, _ => _.availableAt) || '';
  const [year, month, day] = availableAt.split('-');
  const date = availableAt
    ? new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)))
    : null;

  if (props.isPastBooking) {
    return (
      <PastBookingInformation
        boardingPassAvailableDate={date}
        boardingPassUrl={idx(props.data, _ => _.boardingPassUrl)}
      />
    );
  }

  return null; // TODO: Future booking information
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
    }
  `,
);
