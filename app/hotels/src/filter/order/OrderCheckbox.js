// @flow strict

import * as React from 'react';
import { Checkbox } from '@kiwicom/mobile-shared';

import type { OrderByEnum } from '../FilterParametersType';

type Props = {|
  +isChecked: boolean,
  +checkKey: OrderByEnum,
  +onPress: (orderBy: OrderByEnum | null) => void,
  +children: React.Node,
|};

export default class OrderCheckbox extends React.Component<Props> {
  onPress = () => {
    this.props.onPress(this.props.isChecked ? null : this.props.checkKey);
  };

  render() {
    return (
      <Checkbox onPress={this.onPress} isChecked={this.props.isChecked}>
        {this.props.children}
      </Checkbox>
    );
  }
}
