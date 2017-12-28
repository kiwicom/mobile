// @flow

import * as React from 'react';
import { Button, Layout } from '@kiwicom/react-native-app-common';

import FlightsSearchOverlay from './search/FlightsSearchOverlay';

import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

export default class Homepage extends React.Component<Props, {}> {
  goToAllHotelsPage = () => this.props.navigation.navigate('AllHotels');

  render = () => {
    return (
      <Layout>
        <FlightsSearchOverlay navigation={this.props.navigation} />
        <Button title="All hotels search" onPress={this.goToAllHotelsPage} />
      </Layout>
    );
  };
}
