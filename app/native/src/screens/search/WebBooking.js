// @flow

import * as React from 'react';
import { WebView } from 'react-native';

import type { Navigation } from '../../types/Navigation';

type Props = {
  navigation: Navigation,
};

export default class WebBooking extends React.Component<Props, {}> {
  render = () => {
    const { params } = this.props.navigation.state;
    return <WebView source={{ uri: params.booking.bookingUrl }} />;
  };
}
