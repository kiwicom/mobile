// @flow

import { Color, StyleSheet } from '@kiwicom/react-native-app-shared';

export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: Color.textDark,
    android: {
      fontSize: 15,
      lineHeight: 18,
    },
    ios: {
      fontSize: 14,
      lineHeight: 16,
    },
  },
  rating: {
    color: Color.grey.$600,
    fontSize: 9,
    lineHeight: 9,
    alignSelf: 'flex-end',
    android: {
      paddingBottom: 3,
    },
    ios: {
      paddingBottom: 1,
    },
  },
});

export type Props = {|
  hotelName: ?string,
  hotelStars: ?number,
|};
