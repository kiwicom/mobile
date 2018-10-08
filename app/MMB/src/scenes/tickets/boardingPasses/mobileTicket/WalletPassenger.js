// @flow strict

import * as React from 'react';
import { Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon, StyleSheet, Touchable } from '@kiwicom/mobile-shared';
import idx from 'idx';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { AppleWalletPassenger as AppleWalletType } from './__generated__/WalletPassenger.graphql';
import WalletContext from './../../../../context/WalletContext';

type PropsWithContext = {|
  ...Props,
  +addPkpassData: (
    passengerName: string,
    pkpassUrl: string,
    id: string,
    callback?: () => void,
  ) => void,
|};

class WalletPassenger extends React.Component<PropsWithContext> {
  onPressIos = () => {
    const name = idx(this.props.data, _ => _.passenger.fullName) || '';
    const url = idx(this.props.data, _ => _.url) || '';

    if (this.props.segmentId != null) {
      // We cannot navigate before selected segment has been set
      this.props.addPkpassData(name, url, this.props.segmentId, () => {
        this.props.navigation.navigate('AppleWalletScreen');
      });
    }
  };

  onPressAndroid = () => {
    console.warn('TODO');
  };

  render = () => {
    const onPress = Platform.select({
      ios: this.onPressIos,
      android: this.onPressAndroid,
    });

    return (
      <Touchable onPress={onPress} style={styles.row}>
        <React.Fragment>
          <Translation
            passThrough={idx(this.props.data, _ => _.passenger.fullName)}
          />
          {Platform.select({
            android: <TextIcon code="&#xe014;" style={styles.icon} />,
            ios: <TextIcon code="&#xe01F;" style={styles.icon} />,
          })}
        </React.Fragment>
      </Touchable>
    );
  };
}

type Props = {|
  +data: AppleWalletType,
  +navigation: NavigationType,
  +segmentId: ?string,
|};

const WalletPassengerWithContext = (props: Props) => (
  <WalletContext.Consumer>
    {({ actions: { addPkpassData } }) => (
      <WalletPassenger {...props} addPkpassData={addPkpassData} />
    )}
  </WalletContext.Consumer>
);

export default createFragmentContainer(
  withNavigation(WalletPassengerWithContext),
  graphql`
    fragment WalletPassenger on Pkpass {
      url
      passenger {
        fullName
      }
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: defaultTokens.paletteCloudLight,
    paddingVertical: 20,
  },
  icon: {
    fontSize: 26,
    color: defaultTokens.paletteProductNormal,
  },
});
