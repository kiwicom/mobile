import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Styles from '../src/Styles';

export default class Homepage extends React.PureComponent {
  static navigationOptions = {
    title: 'Welcome, User',
  };

  render = () => {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.container}>
        <Button
          onPress={() =>
            navigate('SearchResults', {
              from: 'PRG',
              to: 'BCN',
              date: '2017-11-11',
            })}
          title="Search flights from PRG to BCN"
        />
      </View>
    );
  };
}
