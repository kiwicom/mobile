// @flow

import * as React from 'react';

import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Props = {|
  isActive: boolean,
  onChange: OnChangeFilterParams => void,
|};

export default class FreeCancellationFilter extends React.Component<Props> {
  static isActive = (isActive: boolean) => isActive;

  onChange = () =>
    this.props.onChange({ freeCancellation: !this.props.isActive });

  render = () => (
    <FilterButton
      title="free cancellation"
      isActive={this.constructor.isActive(this.props.isActive)}
      onPress={this.onChange}
    />
  );
}
