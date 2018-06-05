// @flow

import * as React from 'react';
import { View } from 'react-native';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';
import idx from 'idx';

import ETicket from './ETicket';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { TicketSceneQueryResponse } from './__generated__/TicketSceneQuery.graphql';
import ETicketPdf from './ETicketPdf';

type Props = {|
  +data: TicketSceneQueryResponse,
|};

export default class TicketScene extends React.Component<Props> {
  renderInner = (renderProps: TicketSceneQueryResponse) => (
    <View style={{ paddingTop: 20 }}>
      {/* Using inline style because this view is temporary, will be replaced by scroll view and refetch possabilities */}
      <ETicket data={idx(renderProps.booking, _ => _.assets)} />
    </View>
  );

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          query={graphql`
            query TicketSceneQuery($bookingId: ID!) {
              booking(id: $bookingId) {
                assets {
                  ...ETicket
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
    screen: function OpenEticketPdf({ ticketUrl }: {| +ticketUrl: ?string |}) {
      return <ETicketPdf ticketUrl={ticketUrl} />;
    },
  },
};
