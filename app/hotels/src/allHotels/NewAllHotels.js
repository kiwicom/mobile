// @flow strict

import * as React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

import FilterStripe from '../filter/FilterStripe';
import NewAllHotelsSearch from './NewAllHotelsSearch';

export default function NewAllHotels() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <FilterStripe />
      <NewAllHotelsSearch />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 44,
  },
});
