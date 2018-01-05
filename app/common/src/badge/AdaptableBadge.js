// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../Color';

type Props = {|
  text: string,
  color?: ?string,
|};

const style = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: Color.grey.$500,
  },
  text: {
    color: '#fff',
  },
});

/**
 * This badge automatically adapt width based on the text length inside so the
 * result looks like this:
 *
 * .----------.
 * | VERIFIED |
 * `----------`
 *
 * And it expands with long text:
 *
 * .-------------------------------------------------.
 * | UNVERIFIED with very long text to make it clear |
 * `-------------------------------------------------`
 */
export default class AdaptableBadge extends React.Component<Props> {
  render = () => {
    const additionalContainerStyles = {};
    if (this.props.color) {
      additionalContainerStyles.backgroundColor = this.props.color;
    }

    return (
      <View style={[style.container, additionalContainerStyles]}>
        <Text style={style.text}>{this.props.text}</Text>
      </View>
    );
  };
}
