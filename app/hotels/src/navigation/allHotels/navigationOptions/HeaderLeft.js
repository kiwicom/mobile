// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { DateFormatter, DateUtils } from '@kiwicom/mobile-localization';
import {
  Text,
  StyleSheet,
  DatePicker,
  Translation,
} from '@kiwicom/mobile-shared';

import DateButton from './DateButton';
import { HotelsContext, type HotelsContextState } from '../../../HotelsContext';

const dateFormat = {
  weekday: 'short',
  day: '2-digit',
  month: 'short',
};

export default function HeaderLeft() {
  const {
    checkin,
    checkout,
    cityName,
    actions: { setCheckinDate, setCheckoutDate },
  }: HotelsContextState = React.useContext(HotelsContext);
  const today = DateUtils.getToday();
  return (
    <View style={styles.headerLeftcontainer}>
      <Text style={styles.headerLeftText}>
        <Translation passThrough={cityName || ''} />
      </Text>
      {checkin != null && checkout != null && (
        <View style={styles.row}>
          <DatePicker
            customButton={
              <DateButton>
                <Translation
                  passThrough={DateFormatter(checkin).formatCustom(dateFormat)}
                />
              </DateButton>
            }
            date={checkin}
            onDateChange={setCheckinDate}
            minDate={today}
            maxDate={DateUtils(today).addDays(364)}
          />
          <Text style={styles.toText}>
            <Translation id="hotels_search.header.to" />
          </Text>
          <DatePicker
            customButton={
              <DateButton>
                <Translation
                  passThrough={DateFormatter(checkout).formatCustom(dateFormat)}
                />
              </DateButton>
            }
            date={checkout}
            onDateChange={setCheckoutDate}
            minDate={DateUtils(today).addDays(1)}
            maxDate={DateUtils(today).addDays(365)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerLeftcontainer: {
    flexDirection: 'column',
    paddingStart: 16,
    flex: 1,
  },
  headerLeftText: {
    fontWeight: '800',
    fontSize: 16,
    color: defaultTokens.colorTextAttention,
    marginBottom: 3,
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  toText: {
    marginHorizontal: 6,
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
  },
});
