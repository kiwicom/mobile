// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { Touchable, StyleSheet, Icon, Color } from '@kiwicom/mobile-shared';
import { withNavigation } from 'react-navigation';
import { type NavigationType } from '@kiwicom/mobile-navigation';

type Props = {|
  +children: React.Node,
  +navigation: NavigationType,
|};

class BaggageGroupButton extends React.Component<Props> {
  goToBaggage = () => {
    this.props.navigation.navigate({
      routeName: 'mmb.flight_services.checked_baggage',
      key: 'key-mmb.flight_services.checked_baggage',
    });
  };

  render = () => (
    <Touchable onPress={this.goToBaggage}>
      <View style={styles.row}>
        <View style={styles.children}>{this.props.children}</View>
        {Platform.select({
          android: <Icon name="mode-edit" size={20} style={styles.icon} />,
          ios: <Icon name="chevron-right" size={26} style={styles.icon} />,
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
    color: Color.brand,
    alignSelf: 'center',
  },
});

export default withNavigation(BaggageGroupButton);
