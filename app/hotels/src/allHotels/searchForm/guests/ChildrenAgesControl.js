// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '@kiwicom/react-native-app-common';

import AgeControl from './AgeControl';
import type { ChildAge } from './GuestsTypes';

type Props = {|
  childrenAges: ChildAge[],
  onChange: (childrenAges: ChildAge[]) => void,
|};

export default class ChildrenAgesControl extends React.Component<Props> {
  handleAgeChange = (index: number) => (age: number) => {
    const { childrenAges } = this.props;
    childrenAges[index].age = age;
    this.props.onChange(childrenAges);
  };

  renderItem = (item: ChildAge, index: number) => (
    <AgeControl
      key={index}
      label={`Child ${index + 1}`}
      age={item.age}
      onChange={this.handleAgeChange(index)}
      style={{
        borderBottomWidth: this.props.childrenAges.length - 1 === index ? 0 : 1,
        borderBottomColor: '#ccc',
      }}
    />
  );

  render() {
    const { childrenAges } = this.props;
    const items = [];
    for (let i = 0; i < childrenAges.length; i++) {
      items.push({ age: childrenAges[i].age });
    }

    return (
      <View>
        {items.length > 0 && (
          <View style={styles.header}>
            <Text>Age of child at check-out</Text>
          </View>
        )}
        <View style={styles.list}>
          {items.map((item, index) => this.renderItem(item, index))}
        </View>
      </View>
    );
  }
}

const POPUP_PADDING = 20;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.grey.$100,
    padding: POPUP_PADDING / 2,
    paddingLeft: POPUP_PADDING,
  },
  list: {
    paddingLeft: POPUP_PADDING,
    paddingRight: POPUP_PADDING,
  },
});
