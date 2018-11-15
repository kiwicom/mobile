// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { IconLoading, LinkButton, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +isLoading: boolean,
  +onPress: () => void,
|};

/**
 * This button is used as a "Load More" button at the end of the list of all hotels.
 */
export default function LoadMoreButton({ isLoading, onPress }: Props) {
  return (
    <View style={styleSheet.wrapper}>
      {isLoading ? (
        <IconLoading />
      ) : (
        <LinkButton
          title={<Translation id="hotels_search.load_more" />}
          onPress={onPress}
        />
      )}
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    height: 50,
    justifyContent: 'center',
  },
});
