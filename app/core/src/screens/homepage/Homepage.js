// @flow

import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Button, LayoutWithoutHeader } from '@kiwicom/react-native-app-common';

import FlightsSearchOverlay from './search/FlightsSearchOverlay';

import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

const cardStyle = {
  width: 200,
  height: 50,
  backgroundColor: '#fff',
  marginRight: 10,
};

export default class Homepage extends React.Component<Props, {}> {
  goToAllHotelsPage = () => this.props.navigation.navigate('AllHotels');

  render = () => {
    return (
      <View style={styles.container}>
        <FlightsSearchOverlay navigation={this.props.navigation} />

        <LayoutWithoutHeader>
          <Button title="All hotels search" onPress={this.goToAllHotelsPage} />

          <ScrollView
            horizontal={true}
            snapToInterval={210}
            decelerationRate="fast"
            style={{ flex: 1 }}
          >
            <View style={cardStyle}>
              <Text>AAA</Text>
            </View>
            <View style={cardStyle}>
              <Text>BBB</Text>
            </View>
            <View style={cardStyle}>
              <Text>CCC</Text>
            </View>
            <View style={cardStyle}>
              <Text>DDD</Text>
            </View>
            <View style={cardStyle}>
              <Text>EEE</Text>
            </View>
          </ScrollView>
        </LayoutWithoutHeader>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
});
