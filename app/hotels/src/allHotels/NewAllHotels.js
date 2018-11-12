// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import FilterStripe from '../filter/FilterStripe';
import NewAllHotelsSearch from './NewAllHotelsSearch';
import { withHotelsContext, type HotelsContextState } from '../HotelsContext';
import Stay22HotelsSearch from './Stay22HotelsSearch';

type Props = {|
  cityId: string | null,
|};

const NewAllHotels = ({ cityId }: Props) => (
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
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteFill: StyleSheet.absoluteFillObject,
  filterContainer: {
    zIndex: parseInt(defaultTokens.zIndexSticky),
  },
});

const select = ({ cityId }: HotelsContextState) => ({ cityId });

export default withHotelsContext(select)(NewAllHotels);
