// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  Price,
  Text,
  type OnLayout,
  withDimensions,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +text: React.Element<typeof Translation>,
  +price: React.Element<typeof Price>,
  +width: number,
|};

type State = {|
  +maxTextWidth: number | null,
|};

class SummaryRow extends React.Component<Props, State> {
  state = {
    maxTextWidth: null,
  };

  onLayout = (event: OnLayout) => {
    const pagePadding = 34;
    const spacing = 5;
    // Text does not play well with price when it grows too long.
    // Wee need to calculate maxWidth for the text, unless it will push
    // Price out of the screen
    this.setState({
      maxTextWidth:
        this.props.width -
        event.nativeEvent.layout.width -
        pagePadding -
        spacing,
    });
  };

  render() {
    return (
      <View style={styles.row}>
        <Text
          style={[styles.text, { maxWidth: this.state.maxTextWidth }]}
          numberOfLines={1}
        >
          {this.props.text}
        </Text>
        <View onLayout={this.onLayout}>
          <Text style={styles.price}>{this.props.price}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    color: defaultTokens.colorTextSecondary,
  },
  price: {
    color: defaultTokens.colorTextAttention,
  },
});

export default withDimensions(SummaryRow);
