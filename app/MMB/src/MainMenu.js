// @flow

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import { RefreshableScrollView } from '@kiwicom/mobile-shared';

import Header from './components/header/Header';
import ManageMenuGroup from './menuGroups/ManageMenuGroup';
import PassengerMenuGroup from './menuGroups/passengerMenuGroup/PassengerMenuGroup';
import ServicesMenuGroup from './menuGroups/servicesMenuGroup/ServicesMenuGroup';
import TripInfoMenuGroup from './menuGroups/TripInfoMenuGroup';
import MissingInformation from './components/MissingInformation';
import type { MainMenu as BookingType } from './__generated__/MainMenu.graphql';

type Props = {|
  +openMenu: string => void,
  +data: BookingType,
  +relay: RelayRefetchProp,
|};

type State = {|
  activeId: string,
  isRefreshing: boolean,
|};

class MainMenu extends React.Component<Props, State> {
  state = {
    activeId: 'mmb.main_menu.trip_overview',
    isRefreshing: false,
  };

  handleOpenSubmenu = (activeId: string, menuId: string) => {
    this.setState(
      {
        activeId,
      },
      () => this.props.openMenu(menuId),
    );
  };

  refetch = () => {
    this.setState({ isRefreshing: true });
    const { data } = this.props;
    this.props.relay.refetch(
      {
        id: data.databaseId,
        authToken: data.authToken,
      },
      null,
      () => {
        this.setState({ isRefreshing: false });
      },
      {
        force: true,
      },
    );
  };

  render() {
    const { activeId } = this.state;
    const isPastBooking = this.props.data.isPastBooking;
    return (
      <RefreshableScrollView
        refreshing={this.state.isRefreshing}
        onRefresh={this.refetch}
      >
        <Header
          data={this.props.data}
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />

        {!isPastBooking && (
          <React.Fragment>
            <MissingInformation data={this.props.data} />
          </React.Fragment>
        )}

        <TripInfoMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />

        <PassengerMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
          data={this.props.data}
        />

        <ServicesMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
          data={this.props.data}
        />

        <ManageMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />
      </RefreshableScrollView>
    );
  }
}

export default createRefetchContainer(
  MainMenu,
  graphql`
    fragment MainMenu on BookingInterface {
      databaseId
      authToken
      isPastBooking
      ...Header
      ...PassengerMenuGroup
      ...MissingInformation
      ...FlightServices
    }
  `,
  graphql`
    query MainMenuRefetchQuery($id: Int!, $authToken: String!) {
      singleBooking(id: $id, authToken: $authToken) {
        ... on BookingInterface {
          ...MainMenu
        }
      }
    }
  `,
);
