// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { Icon } from '@kiwicom/mobile-shared';

import FilterButton from '../FilterButton';
import type {
  OnChangeFilterParams,
  OrderByEnum,
} from '../FilterParametersType';

const Titles = {
  default: <Translation id="hotels_search.filter.order_by" />,
};

type Props = {|
  +isActive: boolean,
  +onChange: OnChangeFilterParams => void,
  +orderBy: OrderByEnum | null,
|};

type State = {|
  isPopupOpen: boolean,
|};

export default class OrderFilter extends React.Component<Props, State> {
  state = {
    isPopupOpen: false,
  };

  getTitle = () => {
    switch (this.props.orderBy) {
      default:
        return Titles['default'];
    }
  };

  filterButtonClicked = () => {
    this.props.onChange({ orderBy: 'PRICE' }); // TODO: Show modal
  };

  render = () => (
    <React.Fragment>
      <FilterButton
        title={this.getTitle()}
        isActive={this.props.isActive}
        onPress={this.filterButtonClicked}
        icon={<Icon name="format-line-spacing" size={18} />}
      />
      {/* TODO: Add modal */}
    </React.Fragment>
  );
}
