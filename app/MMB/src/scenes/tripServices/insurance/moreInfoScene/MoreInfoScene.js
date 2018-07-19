// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { Color, Text, StyleSheet, LinkButton } from '@kiwicom/mobile-shared';

import Row from './MoreInfoSceneRow';
import rows from './MoreInfoSceneData';

type Props = {|
  +navigation: NavigationType,
|};

export default class MoreInfoScene extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate(
      'mmb.trip_services.insurance.selection.more_info.terms',
    );
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.smallerFont, styles.headerColor, styles.pitch]}>
          <Translation id="mmb.trip_services.insurance.selection.more_info.pitch" />
        </Text>
        {rows.map((row, index) => (
          <Row key={`row-${index + 1}`} index={index} data={row} />
        ))}
        <Text style={[styles.smallerFont, styles.headerColor, styles.pitch]}>
          <Translation id="mmb.trip_services.insurance.selection.more_info.agree_with_terms" />
        </Text>
        <View style={styles.terms}>
          <LinkButton
            title={
              <Translation id="mmb.trip_services.insurance.selection.more_info.terms" />
            }
            titleStyle={styles.smallerFont}
            onPress={this.onPress}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Color.white,
    paddingHorizontal: 6,
  },
  pitch: {
    paddingVertical: 30,
    fontWeight: 'bold',
  },
  smallerFont: {
    fontSize: 10,
  },
  headerColor: {
    color: Color.ink.light,
    fontWeight: 'bold',
  },
  terms: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
});
