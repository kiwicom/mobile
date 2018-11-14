// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import MainMenu from './MainMenu';
import BookingDetailContext from './context/BookingDetailContext';
import { type MainMenuContainerQueryResponse } from './__generated__/MainMenuContainerQuery.graphql';

type Props = {|
  +onNavigate?: string => void,
|};

export default class MainMenuContainer extends React.Component<Props> {
  renderInnerComponent = (renderProps: MainMenuContainerQueryResponse) => (
    <MainMenu
      data={renderProps.singleBooking}
      openMenu={this.props.onNavigate}
    />
  );

  render() {
    return (
      <BookingDetailContext.Consumer>
        {({ bookingId, authToken }) => (
          <PublicApiRenderer
            render={this.renderInnerComponent}
            query={graphql`
              query MainMenuContainerQuery(
                $bookingId: Int!
                $authToken: String!
              ) {
                singleBooking(id: $bookingId, authToken: $authToken) {
                  ... on BookingInterface {
                    ...MainMenu
                  }
                }
              }
            `}
            variables={{
              bookingId,
              authToken,
            }}
          />
        )}
      </BookingDetailContext.Consumer>
    );
  }
}
