// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { Logger } from '@kiwicom/mobile-shared';

import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Props = {|
  isActive: boolean,
  onChange: OnChangeFilterParams => void,
|};

export default class FreeCancellationFilter extends React.Component<Props> {
  onChange = () => {
    this.props.onChange({ freeCancellation: !this.props.isActive });
    if (this.props.isActive === false) {
      Logger.hotelsFilterTagSet('Free cancellation');
    }
  };

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
