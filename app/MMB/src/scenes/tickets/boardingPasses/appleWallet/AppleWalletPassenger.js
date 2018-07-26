// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Icon, StyleSheet, Color, Touchable } from '@kiwicom/mobile-shared';
import idx from 'idx';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import type { AppleWalletPassenger as AppleWalletType } from './__generated__/AppleWalletPassenger.graphql';
import WalletContext from './../../../../context/WalletContext';

type PropsWithContext = {|
  ...Props,
  addPkpassData: (
    passengerName: string,
    pkpassUrl: string,
    id: string,
    callback?: () => void,
  ) => void,
|};

class AppleWalletPassenger extends React.Component<PropsWithContext> {
  onPress = () => {
    const name = idx(this.props.data, _ => _.passenger.fullName) || '';
    const url = idx(this.props.data, _ => _.url) || '';

    if (this.props.segmentId != null) {
      // We cannot navigate before selected segment has been set
      this.props.addPkpassData(name, url, this.props.segmentId, () => {
        this.props.navigation.navigate('AppleWalletScreen');
      });
    }
  };

  render = () => (
    <Touchable onPress={this.onPress} style={styles.row}>
      <React.Fragment>
        <Translation
          passThrough={idx(this.props.data, _ => _.passenger.fullName)}
        />
        <Icon name="chevron-right" size={26} color={Color.brand} />
      </React.Fragment>
    </Touchable>
  );
}

type Props = {|
  +data: AppleWalletType,
  +navigation: NavigationType,
  +segmentId: ?string,
|};

const AppleWalletPassengerWithContext = (props: Props) => (
  <WalletContext.Consumer>
    {({ actions: { addPkpassData } }) => (
      <AppleWalletPassenger {...props} addPkpassData={addPkpassData} />
    )}
  </WalletContext.Consumer>
);

export default createFragmentContainer(
  withNavigation(AppleWalletPassengerWithContext),
  graphql`
    fragment AppleWalletPassenger on Pkpass {
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
    borderBottomColor: Color.backgroundGray,
    paddingVertical: 20,
  },
});
