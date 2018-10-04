// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { Touchable, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +children: React.Node,
  +navigation: NavigationType,
|};

class BaggageGroupButton extends React.Component<Props> {
  goToBaggage = () => {
    this.props.navigation.navigate('mmb.flight_services.checked_baggage');
  };

  render = () => (
    <Touchable onPress={this.goToBaggage}>
      <View style={styles.row}>
        <View style={styles.children}>{this.props.children}</View>
        {Platform.select({
          android: <TextIcon code="E" style={styles.icon} />,
          ios: <TextIcon code="&#xe01F;" style={styles.icon} />,
        })}
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  children: {
    flex: 1,
  },
  icon: {
    color: defaultTokens.paletteProductNormal,
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default withNavigation(BaggageGroupButton);
