// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import {
  StyleSheet,
  Text,
  AdaptableBadge,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';

import MapHeaderButton from './MapHeaderButton';
import HotelsContext from '../../HotelsContext';

type Props = {|
  +goToMap: () => void,
|};

export default function SearchResultsHeader(props: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
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
                        iconColor={defaultTokens.paletteInkLight}
                      />
                    }
                  />
                )}
              </View>
            </View>
          );
        }}
      </HotelsContext.Consumer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: defaultTokens.paletteWhite,
  },
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    paddingStart: 16,
    android: {
      borderBottomWidth: 0,
      elevation: 2,
    },
    ios: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: defaultTokens.borderColorCard,
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
});
