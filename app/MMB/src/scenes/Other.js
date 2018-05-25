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
  bookingId: string,
  navigation: NavigationType,
|};

export default class Other extends React.Component<Props> {
  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate({
      routeName: key,
      key: `key-${key}`,
      params: {
        bookingId: this.props.bookingId,
      },
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

type SubmenuProps = {|
  bookingId: string,
|};

export const OtherSubmenuItems = {
  'mmb.other.invoice': {
    screen: function OtherSubmenuOpenInvoice({ bookingId }: SubmenuProps) {
      return <Invoice bookingID={bookingId} />;
    },
  },
  'mmb.other.open': {
    screen: function OtherSubmenuOpenOnWeb({ bookingId }: SubmenuProps) {
      return <Deeplink bookingID={bookingId} />;
    },
  },
  'mmb.other.refund': {
    screen: function OtherSubmenuRefundForm({ bookingId }: SubmenuProps) {
      return <Deeplink to="REFUND" bookingID={bookingId} />;
    },
  },
};
