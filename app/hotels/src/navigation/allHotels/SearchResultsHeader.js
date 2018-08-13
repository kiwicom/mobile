// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import {
  StyleSheet,
  Color,
  Text,
  AdaptableBadge,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';

import MapHeaderButton from './MapHeaderButton';
import HotelsContext from '../../HotelsContext';

type Props = {|
  +goToMap: () => void,
|};

export default function SearchResultsHeader(props: Props) {
  return (
    <HotelsContext.Consumer>
      {({ cityName, checkin }) => {
        return (
          <View style={styles.container}>
            <View style={styles.row}>
              <View>
                <Text style={styles.text}>
                  <Translation passThrough={cityName || ''} />
                </Text>
                {checkin !== null && (
                  <AdaptableBadge
                    style={styles.badge}
                    textStyle={styles.badgeText}
                    translation={
                      <Translation
                        passThrough={DateFormatter(checkin).formatCustom({
                          weekday: 'long',
                          day: '2-digit',
                          month: 'long',
                        })}
                      />
                    }
                  />
                )}
              </View>
              {checkin !== null && (
                <AdaptableLayout
                  renderOnNarrow={
                    <MapHeaderButton
                      onPress={props.goToMap}
                      iconColor={Color.ink.light}
                    />
                  }
                />
              )}
            </View>
          </View>
        );
      }}
    </HotelsContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    paddingTop: 20,
    paddingStart: 16,
    android: {
      borderBottomWidth: 0,
      elevation: 2,
    },
    ios: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: Color.border,
    },
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  text: {
    fontWeight: '800',
    fontSize: 16,
    color: Color.ink.dark,
    marginBottom: 3,
    paddingTop: 8,
  },
  badgeText: {
    fontSize: 12,
    color: Color.ink.normal,
  },
  badge: {
    backgroundColor: Color.inputBackground,
    marginBottom: 12,
  },
});
