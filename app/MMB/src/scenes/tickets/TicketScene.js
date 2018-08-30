// @flow

import * as React from 'react';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';

import BookingDetailContext from '../../context/BookingDetailContext';
import type { TicketSceneQueryResponse } from './__generated__/TicketSceneQuery.graphql';
import TicketRefetch from './TicketRefetch';
import ETicketPdfScreen, {
  ShareButtonWithContext,
} from './eTicketPdf/ETicketPdfScreen';
import BoardingPassPdfScreen, {
  BoardingPassShareButtonWithContext,
} from './boardingPassesPdf/BoardingPassPdfScreen';

type Props = {|
  +data: TicketSceneQueryResponse,
|};

export default class TicketScene extends React.Component<Props> {
  renderInner = (renderProps: TicketSceneQueryResponse) => (
    <TicketRefetch data={renderProps.singleBooking} />
  );

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId, authToken }) => (
        <PublicApiRenderer
          query={graphql`
            query TicketSceneQuery($bookingId: Int!, $authToken: String!) {
              singleBooking(id: $bookingId, authToken: $authToken) {
                ... on BookingInterface {
                  ...TicketRefetch
                }
              }
            }
          `}
          variables={{ bookingId, authToken }}
          render={this.renderInner}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}

export const TicketSceneSubMenus = {
  'mmb.tickets.e_ticket': {
    screen: ETicketPdfScreen,
    headerRight: <ShareButtonWithContext />,
  },
  'mmb.tickets.boarding_pass': {
    screen: BoardingPassPdfScreen,
    headerRight: <BoardingPassShareButtonWithContext />,
  },
};
