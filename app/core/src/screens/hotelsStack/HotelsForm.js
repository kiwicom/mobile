// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  TextButton,
  DatePicker,
  StyleSheet,
  IncrementDecrementButtons,
  Translation,
} from '@kiwicom/mobile-shared';
import { DateUtils } from '@kiwicom/mobile-localization';

import {
  HotelsFormContext,
  type HotelsFormContextType,
} from './HotelsFormContext';

type Props = {|
  +togglePlacepicker: () => void,
|};

export default function HotelsForm(props: Props) {
  const {
    cityName,
    checkin,
    checkout,
    adultsCount,
    children: childrenCount,
    actions: { onCheckinChange, onCheckoutChange, setAdults, setChildren },
  }: HotelsFormContextType = React.useContext(HotelsFormContext);

  function incrementAdults() {
    setAdults(1);
  }

  function decrementAdults() {
    setAdults(-1);
  }

  function incrementChildren() {
    setChildren(true);
  }

  function decrementChildren() {
    setChildren(false);
  }

  return (
    <>
      <Translation passThrough="Selected city (click to change)" />
      <TextButton
        title={<Translation passThrough={cityName} />}
        onPress={props.togglePlacepicker}
        type="secondary"
      />
      <View style={styles.row}>
        <View style={styles.item}>
          <Translation passThrough="checkin" />
          <DatePicker
            date={checkin}
            onDateChange={onCheckinChange}
            minDate={new Date()}
          />
        </View>
        <View style={styles.item}>
          <Translation passThrough="checkout" />
          <DatePicker
            date={checkout}
            onDateChange={onCheckoutChange}
            maxDate={DateUtils().addDays(365)}
            minDate={DateUtils().addDays(1)}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Translation passThrough="Adults" />
        <IncrementDecrementButtons
          onIncrement={incrementAdults}
          onDecrement={decrementAdults}
          number={adultsCount}
          showNumber={true}
          plusButtonTestID="adultsIncrement"
        />
        <Translation passThrough="Children" />
        <IncrementDecrementButtons
          onIncrement={incrementChildren}
          onDecrement={decrementChildren}
          number={childrenCount.length}
          showNumber={true}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 8,
  },
  item: {
    flex: 1,
    marginEnd: 5,
  },
});
