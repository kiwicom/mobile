// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback, Platform } from 'react-native';
import {
  StyleSheet,
  Color,
  AgePicker,
  Icon,
  Text,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

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
      <React.Fragment>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={[styles.wrapper, style]}>
            <Translation passThrough={label} />
            <View style={styles.ageView}>
              <Text style={styles.age}>
                <Translation
                  testID="ageControlValue"
                  passThrough={age === null ? 0 : age}
                />
              </Text>
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
      </React.Fragment>
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
