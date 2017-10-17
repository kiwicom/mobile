// @flow

import * as React from 'react';
import { Text } from 'react-native';

export default class Booking extends React.PureComponent<{}, {}> {
  static navigationOptions = {
    title: 'Booking detail - 1234567',
  };

  render = () => {
    return <Text>You will see details of the booking here.</Text>;
  };
}
