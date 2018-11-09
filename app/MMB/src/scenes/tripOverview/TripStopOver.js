// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import {
  Duration,
  StyleSheet,
  Touchable,
  Text,
  TextIcon,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import type { TripStopOver as TripStopOverType } from './__generated__/TripStopOver.graphql';

type Props = {|
  +navigation: NavigationType,
  +data: TripStopOverType,
|};

class TripStopOver extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate('GuaranteeScreen');
  };

  render() {
    const { data } = this.props;
    const isKiwiGuarantee = data.guarantee === 'KIWICOM';
    const duration = data.stopoverDuration;
    return (
      <View style={styles.container}>
        <Duration
          duration={duration}
          iconStyle={styles.iconMargin}
          style={styles.duration}
        />

        {isKiwiGuarantee && (
          <View style={styles.row}>
            <TextIcon code="h" style={[styles.icon, styles.iconMargin]} />
            <Touchable onPress={this.onPress}>
              <Text style={styles.buttonText}>
                <Translation id="mmb.trip_overview.trip_stopover.kiwi_guarantee" />
              </Text>
            </Touchable>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: defaultTokens.paletteProductNormal,
    fontSize: 12,
  },
  icon: {
    fontSize: 12,
    color: defaultTokens.colorIconSecondary,
  },
  iconMargin: {
    marginEnd: 8,
  },
  duration: {
    fontSize: 12,
  },
});

export default createFragmentContainer(
  withNavigation(TripStopOver),
  graphql`
    fragment TripStopOver on Leg {
      guarantee
      stopoverDuration
    }
  `,
);
