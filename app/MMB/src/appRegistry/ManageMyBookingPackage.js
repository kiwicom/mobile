// @flow

import * as React from 'react';

import NavigationStack from '../navigation/NavigationStack';

type Props = {|
  language: string,
  currency: string,
|};

export default class ManageMyBookingPackage extends React.Component<Props> {
  render = () => <NavigationStack screenProps={this.props} />;
}
