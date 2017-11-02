// @flow

import * as React from 'react';
import { Animated, StyleSheet, KeyboardAvoidingView } from 'react-native';

import SearchForm from './SearchForm';

type Props = {
  onSend: ({
    from: string,
    to: string,
    date: Date,
  }) => void,
};

export default class SearchHeader extends React.PureComponent<Props, {}> {
  state = {
    height: new Animated.Value(50),
    expanded: false,
  };

  render = () => (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* TODO: this.state.expanded */}
      <SearchForm
        onSend={(from, to, date) =>
          this.props.onSend({
            from,
            to,
            date,
          })}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    bottom: 20,
    right: 20,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    padding: 10,
  },
});
