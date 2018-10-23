// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import FilterStripe from '../filter/FilterStripe';
import NewAllHotelsSearch from './NewAllHotelsSearch';
import HotelsContext from '../HotelsContext';
import Stay22HotelsSearch from './Stay22HotelsSearch';

export default function NewAllHotels() {
  return (
    <HotelsContext.Consumer>
      {({ cityId }) => (
        <View style={styles.container}>
          <View style={styles.absoluteFill}>
            {cityId !== null && (
              <View style={styles.filterContainer}>
                <FilterStripe />
              </View>
            )}
            {cityId === null ? <Stay22HotelsSearch /> : <NewAllHotelsSearch />}
          </View>
        </View>
      )}
    </HotelsContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteFill: StyleSheet.absoluteFillObject,
  filterContainer: {
    zIndex: parseInt(defaultTokens.zIndexSticky),
  },
});
