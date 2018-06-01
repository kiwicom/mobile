// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import ServicesMenuGroup from './menuGroups/ServicesMenuGroup';
import ManageMenuGroup from './menuGroups/ManageMenuGroup';
import Header from './components/header/Header';
import PassengerMenuGroup from './menuGroups/passengerMenuGroup/PassengerMenuGroup';
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

  render = () => {
    const { activeId } = this.state;

    return (
      <ScrollView>
        <Header data={this.props.data} />
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
    fragment MainMenu on Booking {
      ...Header
      ...PassengerMenuGroup
    }
  `,
);
