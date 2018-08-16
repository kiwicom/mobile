// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TextButton, Text, StyleSheet } from '@kiwicom/mobile-shared';

type Props = {||};
export default class RefundScene extends React.Component<Props> {
  onPress = () => {
    console.warn('TODO');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.marginVertical]}>
          <Translation id="mmb.trip_services.insurance.refund.cancellation_requested" />
        </Text>
        <Text style={styles.marginVertical}>
          <Translation id="mmb.trip_services.insurance.refund.cancellation_requested.comment" />
        </Text>
        <View style={styles.marginVertical}>
          <TextButton
            title={
              <Translation id="mmb.trip_services.insurance.refund.confirm" />
            }
            onPress={this.onPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  marginVertical: {
    marginVertical: 10,
  },
});
