// @flow strict

import * as React from 'react';
import { StyleSheet, Touchable, Translation } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

const styles = StyleSheet.create({
  row: {
    backgroundColor: defaultTokens.paletteWhite,
    padding: 10,
    marginBottom: 5,
  },
});

type Props = {|
  +onPress: (name: string) => void,
  +name: string,
|};

export default class PlaygroundListItem extends React.Component<Props> {
  onPress = () => {
    this.props.onPress(this.props.name);
  };

  render() {
    return (
      <Touchable style={styles.row} onPress={this.onPress}>
        <Translation passThrough={this.props.name} />
      </Touchable>
    );
  }
}
