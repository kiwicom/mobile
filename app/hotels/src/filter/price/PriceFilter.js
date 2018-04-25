// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Icon, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import PricePopup from './PricePopup';
import FilterButton from '../FilterButton';
import HotelsSearchContext from '../../HotelsSearchContext';
import type { OnChangeFilterParams } from '../FilterParametersType';
import type { CurrentSearchStats } from '../../filter/CurrentSearchStatsType';

type PropsWithContext = {
  ...Props,
  currentSearchStats: CurrentSearchStats,
};

type State = {|
  isPopupOpen: boolean,
|};

class PriceFilter extends React.Component<PropsWithContext, State> {
  state = {
    isPopupOpen: false,
  };

  filterButtonClicked = () => {
    if (this.props.isActive) {
      this.props.onChange({
        minPrice: null,
        maxPrice: null,
      });
    } else {
      this.openPopup();
    }
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
      return <Translation id="hotels_search.filter.price_filter.price" />;
    }
    if (start === min) {
      return <Translation passThrough={`< ${end} ${currency}`} />;
    }
    if (end === max) {
      return <Translation passThrough={`> ${start} ${currency}`} />;
    }
    return <Translation passThrough={`${start} - ${end} ${currency}`} />;
  };

  render() {
    const { currentSearchStats: { priceMin, priceMax }, isActive } = this.props;
    const start = this.props.start || priceMin;
    const end = this.props.end || priceMax;
    const currency = 'EUR'; // Currently only EUR supported. Should be improved in future release
    return (
      <View>
        <FilterButton
          title={this.getTitle(start, end, priceMin, priceMax, currency)}
          icon={<Icon name="attach-money" size={18} color={Color.white} />}
          isActive={isActive}
          onPress={this.filterButtonClicked}
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

type Props = {|
  start: number | null,
  end: number | null,
  currency: string,
  onChange: OnChangeFilterParams => void,
  isActive: boolean,
|};

export default function PriceFilterWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({ currentSearchStats }) => (
        <PriceFilter {...props} currentSearchStats={currentSearchStats} />
      )}
    </HotelsSearchContext.Consumer>
  );
}
