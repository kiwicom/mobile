// @flow

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import { RefreshableScrollView } from '@kiwicom/mobile-shared';
import idx from 'idx';

import Header from './components/header/Header';
import ManageMenuGroup from './menuGroups/ManageMenuGroup';
import PassengerMenuGroup from './menuGroups/passengerMenuGroup/PassengerMenuGroup';
import ServicesMenuGroup from './menuGroups/ServicesMenuGroup';
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

    this.props.relay.refetch(
      {
        id: idx(this.props.data, _ => _.id),
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

  render = () => {
    const { activeId } = this.state;

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

        <MissingInformation data={this.props.data} />

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
        />

        <ManageMenuGroup
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />
      </RefreshableScrollView>
    );
  };
}

export default createRefetchContainer(
  MainMenu,
  graphql`
    fragment MainMenu on BookingInterface {
      id
      ...Header
      ...PassengerMenuGroup
      ...MissingInformation
    }
  `,
  graphql`
    query MainMenuRefetchQuery($id: ID!) {
      node(id: $id) {
        ... on BookingInterface {
          ...MainMenu
        }
      }
    }
  `,
);
