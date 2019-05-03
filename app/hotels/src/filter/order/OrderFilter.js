// @flow strict

import * as React from 'react';
import { Logger, Translation } from '@kiwicom/mobile-shared';

import FilterButton from '../FilterButton';
import type {
  OnChangeFilterParams,
  OrderByEnum,
} from '../FilterParametersType';
import OrderPopup from './OrderPopup';

const orderByOptions = {
  default: <Translation id="hotels_search.filter.order_by" />,
  PRICE: <Translation id="hotels_search.filter.order_filter.price" />,
  DISTANCE: <Translation id="hotels_search.filter.order_filter.distance" />,
  STARS: <Translation id="hotels_search.filter.order_filter.stars" />,
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
    if (
      this.props.orderBy === null ||
      !orderByOptions.hasOwnProperty(this.props.orderBy)
    ) {
      return orderByOptions.default;
    }
    const order: string = this.props.orderBy;
    return orderByOptions[order];
  };

  filterButtonClicked = () => {
    if (this.props.isActive) {
      this.props.onChange({ orderBy: null });
    } else {
      this.togglePopup();
    }
  };

  handleSave = (orderBy: OrderByEnum | null) => {
    this.props.onChange({ orderBy });
    this.togglePopup();
    Logger.hotelsFilterTagSet('Sort');
  };

  togglePopup = () => {
    this.setState(state => ({
      isPopupOpen: !state.isPopupOpen,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <FilterButton
          title={this.getTitle()}
          isActive={this.props.isActive}
          onPress={this.filterButtonClicked}
        />
        <OrderPopup
          isVisible={this.state.isPopupOpen}
          onClose={this.togglePopup}
          onSave={this.handleSave}
          orderBy={this.props.orderBy}
        />
      </React.Fragment>
    );
  }
}
