// @flow

import * as React from 'react';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';

import BookingDetailContext from '../../context/BookingDetailContext';
import type { TicketSceneQueryResponse } from './__generated__/TicketSceneQuery.graphql';
import TicketRefetch from './TicketRefetch';
import ETicketPdfScreen from './eTicketPdf/ETicketPdfScreen';

type Props = {|
  +data: TicketSceneQueryResponse,
|};

export default class TicketScene extends React.Component<Props> {
  renderInner = (renderProps: TicketSceneQueryResponse) => (
    <TicketRefetch data={renderProps.node} />
  );

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          query={graphql`
            query TicketSceneQuery($bookingId: ID!) {
              node(id: $bookingId) {
                ... on BookingInterface {
                  ...TicketRefetch
                }
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
