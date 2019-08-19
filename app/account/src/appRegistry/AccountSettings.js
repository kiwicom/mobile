// @flow strict

import * as React from 'react';
import { WithNativeNavigation, StyleSheet } from '@kiwicom/mobile-shared';
import { Settings as AccountSettingsStack, NavigationProvider } from '@kiwicom/account-native';
import { View, StatusBar } from 'react-native';

type Props = {|
  +onBackClicked: () => void,
|};

class AccountSettings extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <NavigationProvider onBackPressed={this.props.onBackClicked}>
          <AccountSettingsStack />
        </NavigationProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    android: {
      paddingTop: StatusBar.currentHeight, // This was for some reason not added correctly by react-navigation 🤔
    },
  },
});

export default WithNativeNavigation(AccountSettings, 'AccountSettings');
