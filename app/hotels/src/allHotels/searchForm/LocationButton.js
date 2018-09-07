// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  TouchableWithoutFeedback,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onPress: () => void,
  +location: ?string,
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

const styles = StyleSheet.create({
  locationButton: {
    flexDirection: 'row',
    backgroundColor: defaultTokens.paletteCloudNormal,
    alignItems: 'center',
    android: {
      borderRadius: 2,
      elevation: 1,
      height: 48,
    },
    ios: {
      height: 47,
      borderRadius: 6,
    },
  },
  placeholderText: {
    color: defaultTokens.colorTextSecondary,
  },
  locationText: {
    color: defaultTokens.colorTextAttention,
  },
  icon: {
    marginHorizontal: 10,
    alignSelf: 'center',
  },
});
