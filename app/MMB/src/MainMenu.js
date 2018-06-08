// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Header from './components/header/Header';
import ManageMenuGroup from './menuGroups/ManageMenuGroup';
import PassengerMenuGroup from './menuGroups/passengerMenuGroup/PassengerMenuGroup';
import ServicesMenuGroup from './menuGroups/ServicesMenuGroup';
import TripInfoMenuGroup from './menuGroups/TripInfoMenuGroup';
import type { MainMenu as BookingType } from './__generated__/MainMenu.graphql';

type Props = {|
  +openMenu: string => void,
  +data: BookingType,
|};

type State = {|
  activeId: string,
|};

class MainMenu extends React.Component<Props, State> {
  state = {
    activeId: 'mmb.main_menu.trip_overview',
  };

  handleOpenSubmenu = (activeId: string, menuId: string) => {
    this.setState(
      {
        activeId,
      },
      () => this.props.openMenu(menuId),
    );
  };

  render = () => {
    const { activeId } = this.state;

    return (
      <ScrollView>
        <Header
          data={this.props.data}
          activeId={activeId}
          openSubmenu={this.handleOpenSubmenu}
        />

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
      </ScrollView>
    );
  };
}

export default createFragmentContainer(
  MainMenu,
  graphql`
    fragment MainMenu on BookingInterface {
      ...Header
      ...PassengerMenuGroup
    }
  `,
);
