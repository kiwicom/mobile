// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import FilterStripe from '../filter/FilterStripe';
import NewAllHotelsSearch from './NewAllHotelsSearch';

export default function NewAllHotels() {
  return (
    <View style={styles.container}>
      <View style={styles.absoluteFill}>
        <View style={styles.filterContainer}>
          <FilterStripe />
        </View>
        <NewAllHotelsSearch />
      </View>
    </View>
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
