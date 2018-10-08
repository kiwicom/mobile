// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import WalletPassenger from './WalletPassenger';
import type { AppleWallet as Pkpasses } from './__generated__/TicketList.graphql';

type Props = {|
  +data: Pkpasses,
  +segmentId: ?string,
|};

const TicketList = (props: Props) => {
  const pkpasses = idx(props.data, _ => _.pkpasses) || [];

  if (pkpasses.length === 0) {
    return null;
  }
  return (
    <React.Fragment>
      {Platform.select({
        ios: (
          <React.Fragment>
            <Text style={[styles.title, styles.text]}>
              <Translation id="mmb.boarding_passes.apple_wallet.title" />
            </Text>
            <Text style={[styles.text, styles.infoText]}>
              <Translation id="mmb.boarding_passes.apple_wallet.information_text" />
            </Text>
          </React.Fragment>
        ),
        android: (
          <Text style={[styles.title, styles.text, styles.androidTitle]}>
            <Translation
              id="mmb.boarding_passes.android_wallet.title"
              textTransform="uppercase"
            />
          </Text>
        ),
      })}
      <View style={styles.passengerContainer}>
        {pkpasses.map(item => (
          <WalletPassenger
            key={idx(item, _ => _.passenger.databaseId)}
            data={item}
            segmentId={props.segmentId}
          />
        ))}
      </View>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  TicketList,
  graphql`
    fragment TicketList on BoardingPass {
      pkpasses {
        ...WalletPassenger
        passenger {
          databaseId
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.colorTextSecondary,
  },
  infoText: {
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
  },
  passengerContainer: {
    borderTopWidth: 1,
    borderTopColor: defaultTokens.paletteCloudLight,
  },
  androidTitle: {
    fontWeight: '600',
  },
});
