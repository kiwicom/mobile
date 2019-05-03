// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Translation } from '@kiwicom/mobile-shared';

import NewAllHotelsSearch from './NewAllHotelsSearch';
import { HotelsContext, type HotelsContextState } from '../HotelsContext';
import Stay22HotelsSearch from './Stay22HotelsSearch';
import InputErrorScreen from './InputErrorScreen';

const getErrors = (errors: $PropertyType<HotelsContextState, 'errors'>) => {
  const errorMessages = [];
  if (errors === null) {
    return null;
  }
  if (errors.interval != null) {
    errorMessages.push(
      <Translation
        key="interval"
        id="hotels_search.new_all_hotels.interval_error"
        values={{ interval: errors.interval }}
      />,
    );
  }
  if (errors.beforeToday === true) {
    errorMessages.push(
      <Translation
        key="checkin"
        id="hotels_search.new_all_hotels.checkin_before_today"
      />,
    );
  }
  if (errors.tooFarFuture === true) {
    errorMessages.push(
      <Translation
        key="future"
        id="hotels_search.new_all_hotels.checkout_too_far_in_future"
      />,
    );
  }
  if (errors.invalidCityId === true) {
    errorMessages.push(
      <Translation
        key="cityId"
        id="hotels_search.new_all_hotels.invalid_cityid"
      />,
    );
  }
  if (errors.missingDates === true) {
    errorMessages.push(
      <Translation
        key="missing dates"
        id="hotels_search.new_all_hotels.missing_dates"
      />,
    );
  }
  return errorMessages.length === 0 ? null : errorMessages;
};

const NewAllHotels = () => {
  const { cityId, errors }: HotelsContextState = React.useContext(
    HotelsContext,
  );

  const errorMessages = getErrors(errors);
  const SearchProvider =
    cityId === null ? <Stay22HotelsSearch /> : <NewAllHotelsSearch />;

  return (
    <View style={styles.container}>
      <View style={styles.absoluteFill}>
        {errorMessages !== null && (
          <InputErrorScreen errorMessages={errorMessages} />
        )}
        {errorMessages === null && SearchProvider}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteFill: StyleSheet.absoluteFillObject,
});

export default NewAllHotels;
