// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';
import { type RouteNamesType } from '@kiwicom/mobile-navigation';

import MenuItem from '../../components/menu/MenuItem';

type Props = {|
  title: React.Element<typeof Translation>,
  navigate: (routeName: RouteNamesType) => void,
  routeName: RouteNamesType,
  icon: React.Element<typeof TextIcon>,
|};

export default class FlightServiceMenuItem extends React.Component<Props> {
  onPress = () => {
    this.props.navigate(this.props.routeName);
  };

  render = () => (
    <MenuItem
      title={this.props.title}
      isActive={false}
      onPress={this.onPress}
      icon={this.props.icon}
    />
  );
}
