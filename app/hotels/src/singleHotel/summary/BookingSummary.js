// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  AdaptableLayout,
  CloseButton,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';

import RoomSummary from './RoomSummary';
import BookNow from '../bookNow/BookNow';
import {
  withHotelDetailScreenContext,
  type HotelDetailScreenState,
} from '../HotelDetailScreenContext';

type Props = {|
  +maxPersons: number,
  +goBack: () => void,
|};

const BookingSummary = (props: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <SafeAreaView style={styles.safeArea} forceInset={{ top: 'never' }}>
        <RoomSummary />

        <View style={styles.row}>
          <AdaptableLayout
            renderOnNarrow={
              <View style={styles.closeWrapper}>
                <CloseButton onPress={props.goBack} />
              </View>
            }
          />

          {props.maxPersons > 0 && (
            <View style={styles.bookNowWrapper}>
              <BookNow />
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: defaultTokens.paletteWhite,
  },
  buttonContainer: {
    position: 'absolute',
    end: 0,
    start: 0,
    bottom: 0,
    backgroundColor: defaultTokens.paletteWhite,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  closeWrapper: {
    flex: 1,
    marginEnd: 8,
  },
  bookNowWrapper: {
    flex: 1,
  },
});

const select = ({ maxPersons }: HotelDetailScreenState) => ({
  maxPersons,
});

export default withHotelDetailScreenContext(select)(BookingSummary);
