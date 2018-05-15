// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TitledMenuGroup from '../components/menu/TitledMenuGroup';
import MenuItem from '../components/menu/MenuItem';

type Props = {|
  openSubmenu: (activeId: string, menuId: string) => void,
  activeId: string,
|};

export default class PassengerMenuGroup extends React.Component<Props> {
  handleOnPassengerDetailPress = () => {
    this.props.openSubmenu(
      'mmb.main_menu.passengers.passenger_details',
      'mmb.passenger_detail',
    );
  };

  render = () => (
    <TitledMenuGroup title={<Translation id="mmb.main_menu.passengers" />}>
      <MenuItem
        onPress={this.handleOnPassengerDetailPress}
        title={<Translation id="mmb.main_menu.details" />}
        isActive={
          this.props.activeId === 'mmb.main_menu.passengers.passenger_details'
        }
        icon={<TextIcon code="&#xe087;" />}
      />
    </TitledMenuGroup>
  );
}
