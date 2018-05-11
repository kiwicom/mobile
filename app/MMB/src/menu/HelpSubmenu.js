// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { WebView } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import MenuItem from './components/MenuItem';
import MenuGroup from './components/MenuGroup';

type Props = {|
  navigation: NavigationType,
|};

export default class HelpSubmenu extends React.Component<Props> {
  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate({
      routeName: key,
      key: `key-${key}`,
    });
  };

  handleOpenHelp = () => {
    this.navigate('mmb.help.help');
  };

  handleOpenSupport = () => {
    this.navigate('mmb.help.support');
  };

  render = () => (
    <ScrollView>
      <MenuGroup>
        <MenuItem
          title={<Translation id="mmb.sub_menu.help.help" />}
          onPress={this.handleOpenHelp}
        />
        <MenuItem
          title={<Translation id="mmb.sub_menu.help.call_support" />}
          onPress={this.handleOpenSupport}
        />
      </MenuGroup>
    </ScrollView>
  );
}

export const HelpSubmenuItems = {
  'mmb.help.help': {
    screen: function HelpSubmenuHelp() {
      return (
        <WebView
          source={{
            uri: 'https://www.kiwi.com/helpcenter?ui=webview&faqContext=manage',
          }}
        />
      );
    },
  },
  'mmb.help.support': {
    screen: function HelpSubmenuSupport() {
      return <Translation passThrough="TODO" />;
    },
  },
};
