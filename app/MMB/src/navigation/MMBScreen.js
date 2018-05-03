// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import type { NavigationType } from '@kiwicom/mobile-navigation';

import Layout from '../components/Layout';

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
      menuComponent={<Translation passThrough="MENU" />}
      containerComponent={<Translation passThrough="CONTAINER" />}
    />
  );
}
