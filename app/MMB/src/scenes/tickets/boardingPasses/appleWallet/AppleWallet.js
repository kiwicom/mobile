// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import AppleWalletPassenger from './AppleWalletPassenger';
import type { AppleWallet as Pkpasses } from './__generated__/AppleWallet.graphql';

type Props = {|
  +data: Pkpasses,
  +segmentId: ?string,
|};

const AppleWallet = (props: Props) => {
  const pkpasses = idx(props.data, _ => _.pkpasses) || [];

  if (pkpasses.length === 0) {
    return null;
  }
  return (
    <React.Fragment>
      <Text style={[styles.title, styles.text]}>
        <Translation id="mmb.boarding_passes.apple_wallet.title" />
      </Text>
      <Text style={[styles.text, styles.infoText]}>
        <Translation id="mmb.boarding_passes.apple_wallet.information_text" />
      </Text>
      <View style={styles.passengerContainer}>
        {pkpasses.map(item => (
          <AppleWalletPassenger
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
  AppleWallet,
  graphql`
    fragment AppleWallet on BoardingPass {
      pkpasses {
        ...AppleWalletPassenger
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
});
