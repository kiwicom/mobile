// @flow

import * as React from 'react';
import { WebView } from '@kiwicom/react-native-app-common';

type Props = {
  bookingUrl: string,
};

export default function WebBooking(props: Props) {
  return <WebView source={{ uri: props.bookingUrl }} />;
}
