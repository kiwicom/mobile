// @flow strict

import * as React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import {
  Translation,
  DateFormatter,
  type TranslationType,
} from '@kiwicom/mobile-localization';
import { Text, StyleSheet, DatePicker, Icon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import MapHeaderButton from './allHotels/MapHeaderButton';
import DateButton from './DateButton';

const dateFormat = {
  day: '2-digit',
  month: 'short',
};

type Props = {|
  +cityName?: string,
  +checkin: ?Date,
  +checkout: ?Date,
  +icon: React.Element<typeof Icon>,
  +text: TranslationType,
  +goToAllHotelsMap: () => void,
  +setCheckinDate: Date => void,
  +setCheckoutDate: Date => void,
|};

const hotelsNavigationOptions = ({
  cityName,
  checkin,
  checkout,
  text,
  goToAllHotelsMap,
  icon,
  setCheckinDate,
  setCheckoutDate,
}: Props) => ({
  headerStyle: {
    height: 64,
    marginTop: Platform.select({
      ios: 0,
      android: StatusBar.currentHeight,
    }),
    borderBottomColor: defaultTokens.paletteInkLighter,
  },
  headerLeft: (
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
          />

          <Translation passThrough=" " />
          <Translation id="hotels_search.header.to" />
          <Translation passThrough=" " />
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
          />
        </View>
      )}
    </View>
  ),
  headerRight: (
    <React.Fragment>
      {checkin !== null && (
        <MapHeaderButton
          onPress={goToAllHotelsMap}
          icon={icon}
          text={text}
          testID="map-header-button"
        />
      )}
    </React.Fragment>
  ),
});

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
  label: {
    color: defaultTokens.paletteProductNormal,
  },
  row: {
    flexDirection: 'row',
  },
});

export default hotelsNavigationOptions;
