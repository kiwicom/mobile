// @flow

import * as React from 'react';
import { Text, ScrollView } from 'react-native';

import type { Navigation } from '../../types/Navigation';

type Props = {
  navigation: Navigation,
};

export default class Booking extends React.PureComponent<Props, {}> {
  static navigationOptions = {
    title: 'Booking detail - 1234567',
  };

  render = () => {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView>
        <Text>You will see details of the booking here:</Text>
        <Text>{JSON.stringify(params, null, 2)}</Text>
      </ScrollView>
    );
  };
}
