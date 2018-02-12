// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../Color';

type Props = {|
  text: string,
  color?: ?string,
  textColor?: ?string,
|};

const style = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 5,
    marginBottom: 5,
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
    const additionalTextStyles = {};

    if (this.props.color) {
      additionalContainerStyles.backgroundColor = this.props.color;
    }

    if (this.props.textColor) {
      additionalTextStyles.color = this.props.textColor;
    }

    return (
      <View style={[style.container, additionalContainerStyles]}>
        <Text style={[style.text, additionalTextStyles]}>
          {this.props.text}
        </Text>
      </View>
    );
  };
}
