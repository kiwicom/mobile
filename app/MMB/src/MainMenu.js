// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';

import ServicesMenuGroup from './menuGroups/ServicesMenuGroup';
import ManageMenuGroup from './menuGroups/ManageMenuGroup';
import Header from './components/header/Header';
import PassengerMenuGroup from './menuGroups/PassengerMenuGroup';
import BookingDetailContext from './context/BookingDetailContext';
import type { MainMenuQueryResponse } from './__generated__/MainMenuQuery.graphql';

type Props = {|
  openMenu: string => void,
|};

type State = {|
  activeId: string,
|};

export default class MainMenu extends React.Component<Props, State> {
  state = {
    activeId: 'mmb.main_menu.passengers.passenger_details',
  };

  handleOpenSubmenu = (activeId: string, menuId: string) => {
    this.setState(
      {
        activeId,
      },
      () => this.props.openMenu(menuId),
    );
  };

  renderInnerComponent = (renderProps: MainMenuQueryResponse) => {
    const { activeId } = this.state;

    return (
      <ScrollView>
        <Header data={renderProps.booking} />
        <PassengerMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />
        <ServicesMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />
        <ManageMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />
      </ScrollView>
    );
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          render={this.renderInnerComponent}
          query={graphql`
            query MainMenuQuery($bookingId: ID!) {
              booking(id: $bookingId) {
                ...Header
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
