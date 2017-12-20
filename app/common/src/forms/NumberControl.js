// @flow

import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';

import Color from '../Color';
import IncrementDecrementButtons from '../buttons/IncrementDecrementButtons';

type Props = {|
  label: string,
  number: number,
  min?: number,
  max?: number,
  style?: Object,
  icon?: string,
  onChange: (number: number) => void,
|};

export default class NumberControl extends React.Component<Props> {
  handleIncrement = () => this.props.onChange(this.props.number + 1);

  handleDecrement = () => this.props.onChange(this.props.number - 1);

  render = () => (
    <View style={[styles.control, this.props.style]}>
      {this.props.icon && (
        <MaterialIcons name={this.props.icon} size={20} style={styles.icon} />
      )}
      <Text style={styles.label}>{this.props.label}</Text>
      <Text style={styles.number}>{this.props.number}</Text>
      <IncrementDecrementButtons
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        number={this.props.number}
        min={this.props.min}
        max={this.props.max}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  control: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: Color.icon.grey,
    marginRight: 8,
  },
  label: {
    flex: 4,
  },
  number: {
    flex: 1,
    marginRight: 20,
    textAlign: 'right',
  },
});
