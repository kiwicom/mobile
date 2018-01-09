// @flow

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Popup, Color } from '@kiwicom/react-native-app-common';

import StarsCheckbox from './StarsCheckbox';

type Props = {|
  onClose: () => void,
  onSave: () => void,
  isVisible: boolean,
|};

type State = {|
  stars: { [string]: boolean },
|};

export default class StarsPopup extends React.Component<Props, State> {
  state = {
    stars: {
      five: false,
      four: false,
      three: false,
      two: false,
      one: false,
      unrated: false,
    },
  };

  handleCheckboxOnPress = (option: string) => () =>
    this.setState(state => ({
      stars: {
        ...state.stars,
        [option]: !state.stars[option],
      },
    }));

  render() {
    const { stars } = this.state;
    return (
      <Popup
        onSave={this.props.onSave}
        onClose={this.props.onClose}
        isVisible={this.props.isVisible}
      >
        <Text style={styles.title}>Hotel stars</Text>
        <StarsCheckbox
          stars={5}
          isChecked={stars.five}
          style={styles.delimiter}
          onPress={this.handleCheckboxOnPress('five')}
        />
        <StarsCheckbox
          stars={4}
          isChecked={stars.four}
          style={styles.delimiter}
          onPress={this.handleCheckboxOnPress('four')}
        />
        <StarsCheckbox
          stars={3}
          isChecked={stars.three}
          style={styles.delimiter}
          onPress={this.handleCheckboxOnPress('three')}
        />
        <StarsCheckbox
          stars={2}
          isChecked={stars.two}
          style={styles.delimiter}
          onPress={this.handleCheckboxOnPress('two')}
        />
        <StarsCheckbox
          stars={1}
          isChecked={stars.one}
          style={styles.delimiter}
          onPress={this.handleCheckboxOnPress('one')}
        />
        <StarsCheckbox
          text="Unrated"
          isChecked={stars.unrated}
          onPress={this.handleCheckboxOnPress('unrated')}
        />
      </Popup>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: Color.grey.$800,
    paddingBottom: 5,
  },
  delimiter: {
    borderBottomWidth: 1,
    borderBottomColor: Color.grey.$300,
  },
});
