// @flow

import * as React from 'react';
import { WebView } from '@kiwicom/mobile-shared';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';
import { type NavigationType } from '@kiwicom/mobile-navigation';

import TripServiceRefreshContainer from './TripServiceRefreshContainer';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { TripServicesQueryResponse } from './__generated__/TripServicesQuery.graphql';

type Props = {|
  +navigation: NavigationType,
|};

export default class TripServices extends React.Component<Props> {
  renderLocalServices = (rendererProps: TripServicesQueryResponse) => {
    return <TripServiceRefreshContainer data={rendererProps.singleBooking} />;
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId, authToken }) => (
        <PublicApiRenderer
          query={graphql`
            query TripServicesQuery($bookingId: Int!, $authToken: String!) {
              singleBooking(id: $bookingId, authToken: $authToken) {
                ... on BookingInterface {
                  ...TripServiceRefreshContainer
                }
              }
            }
          `}
          variables={{
            bookingId,
            authToken,
          }}
          render={this.renderLocalServices}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}

export const TripServicesSubmenuItems = {
  'mmb.trip_services.webview': {
    screen: function TripServicesSubmenuWebview({ url }: {| +url: string |}) {
      return <WebView source={{ uri: url }} />;
    },
  },
};
