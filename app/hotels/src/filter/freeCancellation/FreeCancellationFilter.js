// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Props = {|
  isActive: boolean,
  onChange: OnChangeFilterParams => void,
|};

export default class FreeCancellationFilter extends React.Component<Props> {
  onChange = () =>
    this.props.onChange({ freeCancellation: !this.props.isActive });

  render() {
    return (
      <FilterButton
        title={<Translation id="hotels_search.filter.free_cancellation" />}
        isActive={this.props.isActive}
        onPress={this.onChange}
      />
    );
  }
}
