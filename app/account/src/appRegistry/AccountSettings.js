// @flow strict

import * as React from 'react';
import { View, StatusBar } from 'react-native';
import { WithNativeNavigation, StyleSheet } from '@kiwicom/mobile-shared';
import { Settings as AccountSettingsStack, AppProvider } from '@kiwicom/account-native';

type Props = {|
  +onBackClicked: () => void,
  +token: string,
|};

class AccountSettings extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppProvider onBackPressed={this.props.onBackClicked} token={this.props.token}>
          <AccountSettingsStack />
        </AppProvider>
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
