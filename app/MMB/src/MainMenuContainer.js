// @flow

import * as React from 'react';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';

import MainMenu from './MainMenu';
import BookingDetailContext from './context/BookingDetailContext';
import type { MainMenuContainerQuery } from './__generated__/MainMenuContainerQuery.graphql';

type Props = {|
  +openMenu: string => void,
|};

export default class MainMenuContainer extends React.Component<Props> {
  renderInnerComponent = (renderProps: MainMenuContainerQuery) => (
    <MainMenu data={renderProps.booking} openMenu={this.props.openMenu} />
  );

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          render={this.renderInnerComponent}
          query={graphql`
            query MainMenuContainerQuery($bookingId: ID!) {
              booking(id: $bookingId) {
                ...MainMenu
              }
            }
          `}
          variables={{
            bookingId: bookingId,
          }}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
