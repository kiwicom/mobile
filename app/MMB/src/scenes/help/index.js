// @flow

import * as React from 'react';
import { ScrollView, Platform } from 'react-native';
import { WebView } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  MenuItem,
  MenuGroup,
  SeparatorFullWidth,
  SeparatorTrimmed,
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import CallSupport from './CallSupport';

type Props = {|
  +navigation: NavigationType,
|};

export default class Help extends React.Component<Props> {
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
      <MenuGroup
        customSeparator={Platform.select({
          android: <SeparatorFullWidth />,
          ios: <SeparatorTrimmed gapSizeStart={15} />,
        })}
      >
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
    screen: CallSupport,
  },
};
