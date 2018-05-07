// @flow

import * as React from 'react';
import type { NavigationType } from '@kiwicom/mobile-navigation';

import Layout from '../components/Layout';
import MainMenu from '../MainMenu';
// import HelpSubmenu from '../HelpSubmenu';
import OtherSubmenu from '../OtherSubmenu';

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
    <Layout
      menuComponent={<MainMenu />}
      // containerComponent={<HelpSubmenu />}
      containerComponent={<OtherSubmenu />}
    />
  );
}
