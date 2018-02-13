// @flow

import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { Color, AgePicker, Icon } from '@kiwicom/react-native-app-shared';

type Props = {|
  label: string,
  age: number | null,
  onChange: (age: number) => void,
  style?: Object,
|};

type State = {|
  isPickerOpen: boolean,
|};

export default class AgeControl extends React.Component<Props, State> {
  state = {
    isPickerOpen: false,
  };

  onPress = () => this.setState({ isPickerOpen: true });

  onClose = () => this.setState({ isPickerOpen: false });

  onChange = (age: number) => this.props.onChange(age);

  render() {
    const { age, label, style } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={[styles.wrapper, style]}>
            <Text>{label}</Text>
            <View style={styles.ageView}>
              <Text style={styles.age}>{age}</Text>
              {Platform.select({
                android: (
                  <Icon name="mode-edit" size={20} style={styles.icon} />
                ),
                ios: (
                  <Icon name="chevron-right" size={26} style={styles.icon} />
                ),
              })}
            </View>
          </View>
        </TouchableWithoutFeedback>
        <AgePicker
          isVisible={this.state.isPickerOpen}
          min={0}
          max={17}
          selectedValue={age}
          onChange={this.onChange}
          onClose={this.onClose}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  ageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  age: {
    marginRight: 10,
  },
  icon: {
    color: Color.brand,
  },
});
