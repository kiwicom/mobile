// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Checkbox,
  Icon,
  StyleSheet,
  type TranslationType,
} from '@kiwicom/mobile-shared';

type Props = {|
  +isChecked: boolean,
  +icon: React.Element<typeof Icon>,
  +onPress: string => void,
  +amenityName: string,
  +text: TranslationType,
|};

export default class HotelAmenityCheckbox extends React.Component<Props> {
  onPress = () => {
    this.props.onPress(this.props.amenityName);
  };

  render() {
    return (
      <Checkbox isChecked={this.props.isChecked} onPress={this.onPress}>
        <View style={styles.checkbox}>
          {this.props.icon}
          {this.props.text}
        </View>
      </Checkbox>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
