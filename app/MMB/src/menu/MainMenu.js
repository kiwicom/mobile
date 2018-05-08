// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TitledMenuGroup from './components/TitledMenuGroup';
import MenuItem from './components/MenuItem';

type Props = {|
  openMenu: string => void,
|};

type State = {|
  activeId: string,
|};

const VoidAction = () => {
  console.warn('TODO');
};

export default class MainMenu extends React.Component<Props, State> {
  state = {
    activeId: 'mmb.main_menu.manage.help',
  };

  handleOpenHelpSubmenu = () => {
    this.setState(
      {
        activeId: 'mmb.main_menu.manage.help',
      },
      () => this.props.openMenu('mmb.help'),
    );
  };

  handleOpenOtherSubmenu = () => {
    this.setState(
      {
        activeId: 'mmb.main_menu.manage.other',
      },
      () => this.props.openMenu('mmb.other'),
    );
  };

  render = () => {
    const { activeId } = this.state;

    return (
      <ScrollView>
        <TitledMenuGroup title={<Translation id="mmb.main_menu.services" />}>
          <MenuItem
            onPress={VoidAction}
            isActive={activeId === 'mmb.main_menu.services.flight_services'}
            icon={<TextIcon code="&#xe049;" />}
            title={<Translation id="mmb.main_menu.services.flight_services" />}
            description={
              <Translation id="mmb.main_menu.services.flight_services.description" />
            }
          />

          <MenuItem
            onPress={VoidAction}
            isActive={activeId === 'mmb.main_menu.services.trip_services'}
            icon={<TextIcon code="&#xe08a;" />}
            title={<Translation id="mmb.main_menu.services.trip_services" />}
            description={
              <Translation id="mmb.main_menu.services.trip_services.description" />
            }
          />
        </TitledMenuGroup>

        <TitledMenuGroup title={<Translation id="mmb.main_menu.manage" />}>
          <MenuItem
            onPress={this.handleOpenHelpSubmenu}
            isActive={activeId === 'mmb.main_menu.manage.help'}
            icon={<TextIcon code="F" />}
            title={<Translation id="mmb.main_menu.manage.help" />}
            description={
              <Translation id="mmb.main_menu.manage.help.description" />
            }
          />

          <MenuItem
            onPress={this.handleOpenOtherSubmenu}
            isActive={activeId === 'mmb.main_menu.manage.other'}
            icon={<TextIcon code="&#xe07d;" />}
            title={<Translation id="mmb.main_menu.manage.other" />}
            description={
              <Translation id="mmb.main_menu.manage.other.description" />
            }
          />
        </TitledMenuGroup>
      </ScrollView>
    );
  };
}
