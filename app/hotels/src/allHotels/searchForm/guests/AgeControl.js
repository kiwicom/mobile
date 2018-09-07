// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import {
  StyleSheet,
  AgePicker,
  Icon,
  Text,
  type StylePropType,
  TouchableWithoutFeedback,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Age from './Age';

type Props = {|
  +label: React.Element<typeof Translation>,
  +age: number | null,
  +onChange: (age: number) => void,
  +style?: StylePropType,
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
            {label}
            <View style={styles.ageView}>
              <Text style={styles.age}>
                <Age age={age} />
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
    marginEnd: 10,
  },
  icon: {
    color: defaultTokens.paletteProductNormal,
  },
});
