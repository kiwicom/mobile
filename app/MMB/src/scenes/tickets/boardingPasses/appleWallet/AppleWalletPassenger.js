// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Icon, StyleSheet, Color, Touchable } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { withNavigation } from 'react-navigation';
import type { NavigationType } from '@kiwicom/mobile-navigation';

import type { AppleWalletPassenger as AppleWalletType } from './__generated__/AppleWalletPassenger.graphql';

type Props = {|
  +data: AppleWalletType,
  +navigation: NavigationType,
|};

class AppleWalletPassenger extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate('AppleWalletScreen');
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

export default createFragmentContainer(
  withNavigation(AppleWalletPassenger),
  graphql`
    fragment AppleWalletPassenger on Pkpass {
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
