// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { MenuItem, TitledMenuGroup } from '@kiwicom/mobile-navigation';

type Props = {|
  +openSubmenu: (activeId: string, menuId: string) => void,
  +activeId: string,
|};

export default class ManageMenuGroup extends React.Component<Props> {
  handleOpenHelpSubmenu = () => {
    this.props.openSubmenu('mmb.main_menu.manage.help', 'mmb.help');
  };

  handleOpenOtherSubmenu = () => {
    this.props.openSubmenu('mmb.main_menu.manage.other', 'mmb.other');
  };

  render() {
    return (
      <TitledMenuGroup title={<Translation id="mmb.main_menu.manage" />}>
        <MenuItem
          onPress={this.handleOpenHelpSubmenu}
          isActive={this.props.activeId === 'mmb.main_menu.manage.help'}
          icon={<TextIcon code="F" />}
          title={<Translation id="mmb.main_menu.manage.help" />}
          description={
            <Translation id="mmb.main_menu.manage.help.description" />
          }
        />

        <MenuItem
          onPress={this.handleOpenOtherSubmenu}
          isActive={this.props.activeId === 'mmb.main_menu.manage.other'}
          icon={<TextIcon code="&#xe07d;" />}
          title={<Translation id="mmb.main_menu.manage.other" />}
          description={
            <Translation id="mmb.main_menu.manage.other.description" />
          }
        />
      </TitledMenuGroup>
    );
  }
}
