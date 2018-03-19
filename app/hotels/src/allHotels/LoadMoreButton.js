// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  IconLoading,
  LinkButton,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';

type Props = {|
  isLoading: boolean,
  onPress: () => void,
|};

const styleSheet = StyleSheet.create({
  wrapper: {
    height: 50,
    justifyContent: 'center',
  },
});

/**
 * This button is used as a "Load More" button at the end of the list of all hotels.
 */
export default function LoadMoreButton({ isLoading, onPress }: Props) {
  return (
    <View style={styleSheet.wrapper}>
      {isLoading ? (
        <IconLoading />
      ) : (
        <LinkButton title="Load more..." onPress={onPress} />
      )}
    </View>
  );
}
