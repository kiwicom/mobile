// @flow strict

import * as React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { Text, StyleSheet, AdaptableBadge } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

const dateFormat = {
  day: '2-digit',
  month: 'short',
};

const styles = StyleSheet.create({
  headerLeftcontainer: {
    flexDirection: 'column',
    paddingStart: 16,
  },
  headerLeftText: {
    fontWeight: '800',
    fontSize: 16,
    color: defaultTokens.colorTextAttention,
    marginBottom: 3,
    paddingTop: 8,
  },
  badgeText: {
    fontSize: 12,
    color: defaultTokens.colorTextPrimary,
  },
  badge: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
  },
});

type Props = {|
  +cityName?: string,
  +checkin?: string,
  +checkout?: string,
|};

export default ({ cityName, checkin, checkout }: Props) => ({
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
      {checkin != null &&
        checkout != null && (
          <View style={styles.row}>
            <AdaptableBadge
              style={styles.badge}
              textStyle={styles.badgeText}
              translation={
                <Translation
                  passThrough={DateFormatter(new Date(checkin)).formatCustom(
                    dateFormat,
                  )}
                />
              }
            />
            <Translation passThrough=" " />
            <Translation id="hotels_search.header.to" />
            <Translation passThrough=" " />
            <AdaptableBadge
              style={styles.badge}
              textStyle={styles.badgeText}
              translation={
                <Translation
                  passThrough={DateFormatter(new Date(checkout)).formatCustom(
                    dateFormat,
                  )}
                />
              }
            />
          </View>
        )}
    </View>
  ),
});
