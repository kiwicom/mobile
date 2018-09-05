// @flow strict

import * as React from 'react';
import { WebView } from '@kiwicom/mobile-shared';
import {
  HeaderButton,
  type NavigationType,
  HeaderTitle,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +navigation: NavigationType,
|};

export default function GuaranteeScreen() {
  return (
    <WebView
      source={{ uri: 'https://www.kiwi.com/en/pages/guarantee?ui=webview' }}
    />
  );
}

GuaranteeScreen.navigationOptions = ({ navigation }: Props) => {
  function goBack() {
    navigation.goBack(null);
  }

  return {
    headerLeft: <HeaderButton.CloseModal onPress={goBack} />,
    headerTitle: (
      <HeaderTitle>
        <Translation id="mmb.guarantee_screen.title" />
      </HeaderTitle>
    ),
  };
};
