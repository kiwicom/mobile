// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import {
  Translation,
  TranslationFragment,
  DateUtils,
} from '@kiwicom/mobile-localization';

import PricePopup from './PricePopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';
import type { CurrentSearchStats } from '../../filter/CurrentSearchStatsType';
import HotelsContext from '../../HotelsContext';

type PropsWithContext = {
  ...Props,
  +currentSearchStats: CurrentSearchStats,
  +currency: string,
  +daysOfStay: number,
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
    daysOfStay: number,
  ) => {
    if (start === min && end === max) {
      return <Translation id="hotels_search.filter.price_filter.price" />;
    }
    if (start === min) {
      return (
        <TranslationFragment>
          <Translation passThrough="< " />
          <Translation
            id="hotels_search.filter.price_popup.price_label"
            values={{
              amount: end * daysOfStay,
              currency: currency,
            }}
          />
        </TranslationFragment>
      );
    }
    if (end === max) {
      return (
        <TranslationFragment>
          <Translation passThrough="> " />
          <Translation
            id="hotels_search.filter.price_popup.price_label"
            values={{
              amount: start * daysOfStay,
              currency: currency,
            }}
          />
        </TranslationFragment>
      );
    }
    return (
      <TranslationFragment>
        <Translation
          id="hotels_search.filter.price_popup.price_label"
          values={{
            amount: start * daysOfStay,
            currency: currency,
          }}
        />
        <Translation passThrough=" - " />
        <Translation
          id="hotels_search.filter.price_popup.price_label"
          values={{
            amount: end * daysOfStay,
            currency: currency,
          }}
        />
      </TranslationFragment>
    );
  };

  render() {
    const {
      currentSearchStats: { priceMin, priceMax },
      isActive,
      currency,
      daysOfStay,
    } = this.props;
    const start = this.props.start || priceMin;
    const end = this.props.end || priceMax;

    return (
      <React.Fragment>
        <FilterButton
          title={this.getTitle(
            start,
            end,
            priceMin,
            priceMax,
            currency,
            daysOfStay,
          )}
          icon={<TextIcon code="@" />}
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
          daysOfStay={daysOfStay}
        />
      </React.Fragment>
    );
  }
}

type Props = {|
  +start: number | null,
  +end: number | null,
  +currency: string,
  +onChange: OnChangeFilterParams => void,
  +isActive: boolean,
|};

const calculateDaysOfStay = (checkin, checkout) => {
  if (checkin && checkout) {
    return DateUtils.diffInDays(checkout, checkin);
  }
  return null;
};

export default function PriceFilterWithContext(props: Props) {
  return (
    <HotelsContext.Consumer>
      {({ currency, checkin, checkout, currentSearchStats }) => {
        const daysOfStay = calculateDaysOfStay(checkin, checkout);
        if (daysOfStay === null) {
          return null;
        }
        return (
          <PriceFilter
            {...props}
            currentSearchStats={currentSearchStats}
            currency={currency}
            daysOfStay={daysOfStay}
          />
        );
      }}
    </HotelsContext.Consumer>
  );
}
