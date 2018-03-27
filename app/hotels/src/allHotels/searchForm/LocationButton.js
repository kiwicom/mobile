// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  Color,
} from '@kiwicom/react-native-app-shared';
import Translation, {
  DummyTranslation,
} from '@kiwicom/react-native-app-translations';

const styles = StyleSheet.create({
  locationButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 1, // Android only
    android: {
      borderRadius: 3,
      height: 48,
    },
    ios: {
      borderRadius: 0,
      height: 47,
    },
  },
  placeholderText: {
    color: '#cbcbd0',
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
            <DummyTranslation id={props.location} />
          ) : (
            <Translation id="HotelsSearch.LocationButton.Placeholder" />
          )}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
