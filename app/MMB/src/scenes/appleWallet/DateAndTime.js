// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { StyleSheet } from '@kiwicom/mobile-shared';

import WalletText from './WalletText';
import WalletContext from '../../context/WalletContext';

export default function DateAndTime() {
  return (
    <WalletContext.Consumer>
      {({ selectedSegment }) => {
        if (selectedSegment === null) {
          return null;
        }

        const formattedDate =
          selectedSegment.flightDate !== null
            ? DateFormatter(new Date(selectedSegment.flightDate)).formatToDate()
            : '';

        const formattedTime =
          selectedSegment.flightDate !== null
            ? DateFormatter(new Date(selectedSegment.flightDate)).formatToTime()
            : '';
        return (
          <View style={styles.container}>
            <View style={styles.item}>
              <WalletText
                label={
                  <Translation id="mmb.apple_wallet.apple_wallet_scene.departure_date" />
                }
                text={<Translation passThrough={formattedDate} />}
              />
            </View>
            <View style={styles.item}>
              <WalletText
                label={
                  <Translation id="mmb.apple_wallet.apple_wallet_scene.departure_time" />
                }
                text={<Translation passThrough={formattedTime} />}
              />
            </View>
          </View>
        );
      }}
    </WalletContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
});
