// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text, StyleSheet, Icon, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

const styles = StyleSheet.create({
  locationButton: {
    flexDirection: 'row',
    backgroundColor: Color.inputBackground,
    alignItems: 'center',
    borderRadius: 6,
    android: {
      elevation: 1,
      height: 48,
    },
    ios: {
      height: 47,
    },
  },
  placeholderText: {
    color: Color.textLight,
  },
  locationText: {
    color: Color.textDark,
  },
  icon: {
    marginHorizontal: 10,
    alignSelf: 'center',
  },
});

type Props = {|
  onPress: () => void,
  location: ?string,
|};

export default function LocationButton(props: Props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.locationButton}>
        <Icon name="location-city" size={20} style={styles.icon} />
        <Text
          style={props.location ? styles.locationText : styles.placeholderText}
        >
          {props.location ? (
            <Translation passThrough={props.location} />
          ) : (
            <Translation id="hotels_search.location_button.placeholder" />
          )}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
