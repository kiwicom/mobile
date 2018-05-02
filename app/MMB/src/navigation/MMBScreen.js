// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import type { NavigationType } from '@kiwicom/mobile-navigation';

type Props = {|
  navigation: NavigationType,
  screenProps: {|
    language: string,
    currency: string,
  |},
|};

export default class MMBScreen extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Manage my bookings',
  });

  render = () => (
    <View>
      <Translation passThrough="MMB Screen" />
    </View>
  );
}
