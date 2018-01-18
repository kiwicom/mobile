// @flow

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ReduxContext } from '@kiwicom/react-native-app-redux';

import HotelsReducer from './src/HotelsReducer';
import HotelsStack from './src/navigation/NavigationStack';

type Props = {|
  bookingComAffiliate: string,
  language: string,
  currency: string,
  onBackClicked: () => void,
|};

export default function HotelsStandalonePackage(props: Props) {
  const reducers = {
    hotels: HotelsReducer,
  };

  return (
    <ReduxContext reducers={reducers}>
      <HotelsStack screenProps={props} />
    </ReduxContext>
  );
}

AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);
