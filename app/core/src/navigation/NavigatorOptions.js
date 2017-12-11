// @flow

import { Color } from '@kiwicom/react-native-app-common';

export default {
  navigationOptions: {
    headerStyle: {
      backgroundColor: Color.brand,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff', // back arrow
  },
  cardStyle: {
    backgroundColor: '#eee',
  },
  headerMode: 'screen',
};
