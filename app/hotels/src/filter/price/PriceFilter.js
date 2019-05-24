// @flow

import * as React from 'react';
import { Logger } from '@kiwicom/mobile-shared';
import { DateUtils } from '@kiwicom/mobile-localization';
import { Decimal } from 'decimal.js-light';

import PricePopup from './PricePopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';
import PriceTitle from './PriceTitle';

type Props = {|
  +start: Decimal | null,
  +end: Decimal | null,
  +currency: string,
  +onChange: OnChangeFilterParams => void,
  +isActive: boolean,
|};

const PriceFilter = (props: Props) => {
  const {
    currency,
    checkin,
    checkout,
    currentSearchStats,
  }: HotelsContextState = React.useContext(HotelsContext);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function filterButtonClicked() {
    if (props.isActive) {
      props.onChange({
        minPrice: null,
        maxPrice: null,
      });
    } else {
      openPopup();
    }
  }

  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  function handleSave({
    minPrice,
    maxPrice,
  }: {
    minPrice: number,
    maxPrice: number,
  }) {
    const filter = {
      minPrice:
        minPrice !== currentSearchStats.priceMin ? new Decimal(minPrice) : null,
      maxPrice:
        maxPrice !== currentSearchStats.priceMax ? new Decimal(maxPrice) : null,
    };
    props.onChange(filter);
    Logger.hotelsFilterTagSet('Price');
  }

  const start = props.start ?? currentSearchStats.priceMin;
  const end = props.end ?? currentSearchStats.priceMax;
  const daysOfStay = calculateDaysOfStay(checkin, checkout);
  if (daysOfStay === null) {
    return null;
  }
  return (
    <>
      <FilterButton
        title={
          <PriceTitle
            start={new Decimal(start)}
            end={new Decimal(end)}
            min={currentSearchStats.priceMin}
            max={currentSearchStats.priceMax}
            currency={currency}
            daysOfStay={daysOfStay}
          />
        }
        isActive={props.isActive}
        onPress={filterButtonClicked}
      />
      <PricePopup
        isVisible={isPopupOpen}
        onClose={closePopup}
        onSave={handleSave}
        min={currentSearchStats.priceMin}
        max={currentSearchStats.priceMax}
        start={new Decimal(start)}
        end={new Decimal(end)}
        currency={currency}
        daysOfStay={daysOfStay}
      />
    </>
  );
};

const calculateDaysOfStay = (checkin, checkout) => {
  if (checkin && checkout) {
    return DateUtils.diffInDays(checkout, checkin);
  }
  return null;
};

export default PriceFilter;
