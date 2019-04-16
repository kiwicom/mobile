// @flow

import * as React from 'react';
import { Icon, Logger } from '@kiwicom/mobile-shared';
import { DateUtils } from '@kiwicom/mobile-localization';

import PricePopup from './PricePopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';
import PriceTitle from './PriceTitle';

type Props = {|
  +start: number | null,
  +end: number | null,
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
      minPrice: minPrice !== currentSearchStats.priceMin ? minPrice : null,
      maxPrice: maxPrice !== currentSearchStats.priceMax ? maxPrice : null,
    };
    props.onChange(filter);
    Logger.hotelsFilterTagSet('Price');
  }

  const { isActive } = props;
  const start = props.start || currentSearchStats.priceMin;
  const end = props.end || currentSearchStats.priceMax;
  const daysOfStay = calculateDaysOfStay(checkin, checkout);
  if (daysOfStay === null) {
    return null;
  }
  return (
    <>
      <FilterButton
        title={
          <PriceTitle
            start={start}
            end={end}
            min={currentSearchStats.priceMin}
            max={currentSearchStats.priceMax}
            currency={currency}
            daysOfStay={daysOfStay}
          />
        }
        icon={<Icon name="money" />}
        isActive={isActive}
        onPress={filterButtonClicked}
      />
      <PricePopup
        isVisible={isPopupOpen}
        onClose={closePopup}
        onSave={handleSave}
        min={currentSearchStats.priceMin}
        max={currentSearchStats.priceMax}
        start={start}
        end={end}
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
