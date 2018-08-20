// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { ScrollView, Platform, Linking } from 'react-native';
import { TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation, Alert } from '@kiwicom/mobile-localization';
import {
  MenuItem,
  MenuGroup,
  SeparatorFullWidth,
  SeparatorTrimmed,
  type RouteNamesType,
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { Help as HelpType } from './__generated__/Help.graphql';

type Props = {|
  +navigation: NavigationType,
  +data: HelpType,
|};

class Help extends React.Component<Props> {
  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate(key);
  };

  handleOpenHelp = () => {
    this.navigate('mmb.help.help');
  };

  handleOpenCallSupport = () => {
    const number = idx(this.props.data, _ => _.number) || '';
    const sanitizedNumber = number.replace(/\s/g, '');
    const url =
      Platform.OS === 'ios'
        ? `telprompt:+${sanitizedNumber}`
        : `tel:${sanitizedNumber}`;

    this.callSupport(url);
  };

  alertCallSupportFailed = () => {
    Alert.translatedAlert(null, {
      id: 'mmb.sub_menu.help.call_support.failed',
    });
  };

  callSupport = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (err) {
      this.alertCallSupportFailed();
    }
  };

  render = () => {
    const number = idx(this.props.data, _ => _.number) || '';

    return (
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
          {number !== '' && (
            <MenuItem
              title={<Translation id="mmb.sub_menu.help.call_support" />}
              onPress={this.handleOpenCallSupport}
              actionIcon={<TextIcon code="&#xe058;" style={styles.icon} />}
              description={<Translation passThrough={`+${number}`} />}
            />
          )}
        </MenuGroup>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  icon: {
    color: defaultTokens.paletteProductNormal,
    fontSize: 22,
  },
});

export default createFragmentContainer(
  withNavigation(Help),
  graphql`
    fragment Help on CustomerSupportNumber {
      number
    }
  `,
);
