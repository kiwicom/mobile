// @flow

import * as React from 'react';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';

import BookingDetailContext from '../../context/BookingDetailContext';
import type { TicketSceneQueryResponse } from './__generated__/TicketSceneQuery.graphql';
import ETicketRefetch from './ETicketRefetch';
import ETicketPdfScreen from './eTicketPdf/ETicketPdfScreen';

type Props = {|
  +data: TicketSceneQueryResponse,
|};

export default class TicketScene extends React.Component<Props> {
  renderInner = (renderProps: TicketSceneQueryResponse) => (
    <ETicketRefetch data={renderProps.booking} />
  );

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          query={graphql`
            query TicketSceneQuery($bookingId: ID!) {
              booking(id: $bookingId) {
                ...ETicketRefetch
              }
            }
          `}
          variables={{ bookingId }}
          render={this.renderInner}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}

export const TicketSceneSubMenus = {
  'mmb.tickets.e_ticket': {
    screen: ETicketPdfScreen,
  },
};
