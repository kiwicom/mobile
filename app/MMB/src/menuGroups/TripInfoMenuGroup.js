// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { MenuItem, TitledMenuGroup } from '@kiwicom/mobile-navigation';

type Props = {|
  +openSubmenu: (activeId: string, menuId: string) => void,
  +activeId: string,
|};

export default class TripInfoMenuGroup extends React.Component<Props> {
  handleOpenTicketsSubmenu = () => {
    this.props.openSubmenu('mmb.main_menu.trip_info.tickets', 'mmb.tickets');
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
        icon={<TextIcon code="." orbit={true} />}
        description={<Translation id="mmb.tickets.boarding_passes" />}
      />
      <MenuItem
        onPress={this.handleOpenTimelineSubmenu}
        title={<Translation id="mmb.timeline.title" />}
        isActive={this.props.activeId === 'mmb.main_menu.trip_info.timeline'}
        icon={<TextIcon code="e" orbit={true} />}
        description={<Translation id="mmb.subtitle.trip_schedule" />}
      />
    </TitledMenuGroup>
  );
}
