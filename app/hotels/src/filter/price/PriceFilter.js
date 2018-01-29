// @flow

import * as React from 'react';
import { View } from 'react-native';

import PricePopup from './PricePopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

export const MIN_PRICE = 0;
export const MAX_PRICE = 300;

type Props = {
  start: number | null,
  end: number | null,
  currency: string,
  onChange: OnChangeFilterParams => void,
};

type State = {|
  isPopupOpen: boolean,
|};

export default class PriceFilter extends React.Component<Props, State> {
  static isActive = (start: number | null, end: number | null) => {
    const startEdge = start || MIN_PRICE;
    const endEdge = end || MAX_PRICE;

    return startEdge !== MIN_PRICE || endEdge !== MAX_PRICE;
  };

  mounted = true;
  state = {
    isPopupOpen: false,
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  handlePopupToggle = () => {
    if (!this.mounted) {
      return;
    }

    this.setState(state => ({
      isPopupOpen: !state.isPopupOpen,
    }));
  };

  handleSave = ({
    minPrice,
    maxPrice,
  }: {
    minPrice: number,
    maxPrice: number,
  }) => {
    const filter = {
      minPrice: minPrice !== MIN_PRICE ? minPrice : null,
      maxPrice: maxPrice !== MAX_PRICE ? maxPrice : null,
    };
    this.props.onChange(filter);
  };

  getTitle = (
    start: number,
    end: number,
    min: number,
    max: number,
    currency: string,
  ) => {
    if (start === min && end === max) {
      return 'price';
    }
    if (start === min) {
      return `< ${end} ${currency}`;
    }
    if (end === max) {
      return `> ${start} ${currency}`;
    }
    return `${start} - ${end} ${currency}`;
  };

  render() {
    const min = MIN_PRICE;
    const max = MAX_PRICE;
    const start = this.props.start || MIN_PRICE;
    const end = this.props.end || MAX_PRICE;
    const currency = this.props.currency;
    return (
      <View>
        <FilterButton
          title={this.getTitle(start, end, min, max, currency)}
          icon={{ name: 'attach-money', color: '#fff' }}
          isActive={this.constructor.isActive(start, end)}
          onPress={this.handlePopupToggle}
        />
        <PricePopup
          isVisible={this.state.isPopupOpen}
          onClose={this.handlePopupToggle}
          onSave={this.handleSave}
          min={min}
          max={max}
          start={start}
          end={end}
          currency={currency}
        />
      </View>
    );
  }
}
