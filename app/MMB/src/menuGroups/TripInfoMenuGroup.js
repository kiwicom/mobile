// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TitledMenuGroup from '../components/menu/TitledMenuGroup';
import MenuItem from '../components/menu/MenuItem';

type Props = {|
  +openSubmenu: (activeId: string, menuId: string) => void,
  +activeId: string,
|};

export default class TripInfoMenuGroup extends React.Component<Props> {
  handleOpenTicketsSubmenu = () => {
    this.props.openSubmenu('mmb.main_menu.trip_info.tickets', 'mmb.tickets');
  };

  handleOpenExploreSubmenu = () => {
    this.props.openSubmenu('mmb.main_menu.trip_info.explore', 'mmb.explore');
  };

  handleOpenTimelineSubmenu = () => {
    this.props.openSubmenu('mmb.main_menu.trip_info.timeline', 'mmb.timeline');
  };

  render = () => (
    <TitledMenuGroup title={<Translation id="mmb.title.trip_info" />}>
      <MenuItem
        onPress={this.handleOpenTicketsSubmenu}
        title={<Translation id="mmb.button.tickets" />}
        isActive={this.props.activeId === 'mmb.main_menu.trip_info.tickets'}
        icon={<TextIcon code="." />}
        description={<Translation id="mmb.tickets.boarding_passes" />}
      />
      <MenuItem
        onPress={this.handleOpenExploreSubmenu}
        title={<Translation id="mmb.landing_page.maw.action_button.explore" />}
        isActive={this.props.activeId === 'mmb.main_menu.trip_info.explore'}
        icon={<TextIcon code="&#xe07e;" />}
        description={<Translation id="mmb.subtitle.airport_and_destination" />}
      />
      <MenuItem
        onPress={this.handleOpenTimelineSubmenu}
        title={<Translation id="mmb.timeline.title" />}
        isActive={this.props.activeId === 'mmb.main_menu.trip_info.timeline'}
        icon={<TextIcon code="&#xe059;" />}
        description={<Translation id="mmb.subtitle.trip_schedule" />}
      />
    </TitledMenuGroup>
  );
}
