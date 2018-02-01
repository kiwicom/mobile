// @flow

import * as React from 'react';
import { View } from 'react-native';
import { connect } from '@kiwicom/react-native-app-redux';

import PricePopup from './PricePopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';
import type { CurrentSearchStats } from '../../filter/CurrentSearchStatsType';

type Props = {|
  start: number | null,
  end: number | null,
  currency: string,
  onChange: OnChangeFilterParams => void,
  currentSearchStats: CurrentSearchStats,
|};

type State = {|
  isPopupOpen: boolean,
|};

class PriceFilter extends React.Component<Props, State> {
  state = {
    isPopupOpen: false,
  };

  static isActive = (
    start: number,
    end: number,
    priceMin: number,
    priceMax: number,
  ) => {
    const isFilterSet = start !== null || end !== null;
    const isFilterEqualToSearchStats = start === priceMin && end === priceMax;
    return isFilterSet && !isFilterEqualToSearchStats;
  };

  openPopup = () =>
    this.setState({
      isPopupOpen: true,
    });

  closePopup = (callback?: Function) =>
    this.setState(
      {
        isPopupOpen: false,
      },
      callback,
    );

  handleSave = ({
    minPrice,
    maxPrice,
  }: {
    minPrice: number,
    maxPrice: number,
  }) => {
    const filter = {
      minPrice:
        minPrice !== this.props.currentSearchStats.priceMin ? minPrice : null,
      maxPrice:
        maxPrice !== this.props.currentSearchStats.priceMax ? maxPrice : null,
    };
    this.closePopup(() => this.props.onChange(filter));
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
    const { currentSearchStats: { priceMin, priceMax } } = this.props;
    const start = this.props.start || priceMin;
    const end = this.props.end || priceMax;
    const currency = this.props.currency;
    return (
      <View>
        <FilterButton
          title={this.getTitle(start, end, priceMin, priceMax, currency)}
          icon={{ name: 'attach-money', color: '#fff' }}
          isActive={this.constructor.isActive(start, end, priceMin, priceMax)}
          onPress={this.openPopup}
        />
        <PricePopup
          isVisible={this.state.isPopupOpen}
          onClose={this.closePopup}
          onSave={this.handleSave}
          min={priceMin}
          max={priceMax}
          start={start}
          end={end}
          currency={currency}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentSearchStats: state.hotels.currentSearchStats,
});

export default connect(mapStateToProps)(PriceFilter);
