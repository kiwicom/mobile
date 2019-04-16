// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

import NewAllHotelsSearch from './NewAllHotelsSearch';
import { HotelsContext, type HotelsContextState } from '../HotelsContext';
import Stay22HotelsSearch from './Stay22HotelsSearch';

const NewAllHotels = () => {
  const { cityId }: HotelsContextState = React.useContext(HotelsContext);

  return (
    <View style={styles.container}>
      <View style={styles.absoluteFill}>
        {cityId === null ? <Stay22HotelsSearch /> : <NewAllHotelsSearch />}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteFill: StyleSheet.absoluteFillObject,
});

export default NewAllHotels;
