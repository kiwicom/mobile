// @flow

import * as React from 'react';
import { ScrollView, Platform } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import {
  type NavigationType,
  type RouteNamesType,
} from '@kiwicom/mobile-navigation';

import MenuItem from '../components/menu/MenuItem';
import MenuGroup from '../components/menu/MenuGroup';
import Deeplink from '../components/Deeplink';
import Invoice from '../components/Invoice';
import { SeparatorFullWidth, SeparatorTrimmed } from '../components/Separators';

type Props = {|
  +navigation: NavigationType,
|};

export default class Other extends React.Component<Props> {
  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate({
      routeName: key,
      key: `key-${key}`,
    });
  };

  handleOpenInvoice = () => {
    this.navigate('mmb.other.invoice');
  };

  handleOpenOnWeb = () => {
    this.navigate('mmb.other.open');
  };

  handleOpenRefund = () => {
    this.navigate('mmb.other.refund');
  };

  render = () => (
    <ScrollView>
      <MenuGroup
        customSeparator={Platform.select({
          android: <SeparatorFullWidth />,
          ios: <SeparatorTrimmed gapSizeStart={15} />,
        })}
      >
        <MenuItem
          title={<Translation id="mmb.sub_menu.manage.other.invoice" />}
          onPress={this.handleOpenInvoice}
        />
        <MenuItem
          title={<Translation id="mmb.sub_menu.manage.other.open_on_web" />}
          onPress={this.handleOpenOnWeb}
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

export const OtherSubmenuItems = {
  'mmb.other.invoice': {
    screen: function OtherSubmenuOpenInvoice() {
      return <Invoice />;
    },
  },
  'mmb.other.open': {
    screen: function OtherSubmenuOpenOnWeb() {
      return <Deeplink />;
    },
  },
  'mmb.other.refund': {
    screen: function OtherSubmenuRefundForm() {
      return <Deeplink to="REFUND" />;
    },
  },
};
