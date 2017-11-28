// @flow

import * as React from 'react';
import { WebView } from 'react-native';

import type { Navigation } from '@kiwicom/native-common';

type Props = {
  navigation: Navigation,
};

export default function WebBooking({
  navigation: { state: { params } },
}: Props) {
  return <WebView source={{ uri: params.bookingUrl }} />;
}
