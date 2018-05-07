// @flow

import * as React from 'react';
import { ManageMyBookingPackage } from '@kiwicom/mobile-manage-my-booking';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { MMB_TOKEN } from 'react-native-dotenv';

type Props = {|
  navigation: NavigationType,
|};

export default class MMBPackageWrapper extends React.Component<Props> {
  render = () => (
    <ManageMyBookingPackage
      language="en"
      currency="EUR"
      accessToken={MMB_TOKEN}
    />
  );
}
