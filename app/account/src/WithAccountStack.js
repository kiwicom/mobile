// @flow strict

import * as React from 'react';
import { View, StatusBar } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { AppProvider } from '@kiwicom/account-native';

type Props = {|
  +onBackClicked: () => void,
  +token: string,
  +children: React.Node,
|};

export default function WithAccountStack(props: Props) {
  return (
    // $FlowFixMe Errors after moving rn modules from untyped to declarations
    <View style={styles.container}>
      <AppProvider onBackPressed={props.onBackClicked} token={props.token}>
        {props.children}
      </AppProvider>
    </View>
  );
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
