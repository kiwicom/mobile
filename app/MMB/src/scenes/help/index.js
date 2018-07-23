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

type Props = {|
  +navigation: NavigationType,
|};

export default class Help extends React.Component<Props> {
  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate(key);
  };

  handleOpenHelp = () => {
    this.navigate('mmb.help.help');
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
};
