// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { type NavigationType } from '@kiwicom/mobile-navigation';

import MenuItem from './components/menu/MenuItem';
import MenuGroup from './components/menu/MenuGroup';

const VoidAction = () => {
  console.warn('TODO');
};

type Props = {|
  navigation: NavigationType,
|};

export default class OtherSubmenu extends React.Component<Props> {
  handleOpenRefund = () => {
    this.props.navigation.navigate({
      routeName: 'mmb.other.refund',
      key: 'key-mmb.other.refund',
    });
  };

  render = () => (
    <ScrollView>
      <MenuGroup>
        <MenuItem
          title={<Translation id="mmb.sub_menu.manage.other.invoice" />}
          onPress={VoidAction}
        />
        <MenuItem
          title={<Translation id="mmb.sub_menu.manage.other.open_on_web" />}
          onPress={VoidAction}
        />
        <MenuItem
          title={<Translation id="mmb.sub_menu.manage.other.refund_form" />}
          description={
            <Translation id="mmb.sub_menu.manage.other.apply_for_refund" />
          }
          onPress={this.handleOpenRefund}
        />
      </MenuGroup>
    </ScrollView>
  );
}
