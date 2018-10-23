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
    <View style={styles.container}>
      <View style={styles.absoluteFill}>
        <View style={styles.filterContainer}>
          <FilterStripe />
        </View>
        <HotelsContext.Consumer>
          {({ cityId }) => {
            if (cityId != null) {
              return <NewAllHotelsSearch />;
            }
            return <Stay22HotelsSearch />;
          }}
        </HotelsContext.Consumer>
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
