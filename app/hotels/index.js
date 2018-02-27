// @flow

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ReduxContext } from '@kiwicom/react-native-app-redux';
import { ConfigReducer } from '@kiwicom/react-native-app-config';

import FiltersReducer from './src/filter/FiltersReducer';
import HotelsReducer from './src/HotelsReducer';
import HotelsStack from './src/navigation/NavigationStack';
import type { Coordinates } from './src/CoordinatesType';

type Props = {|
  bookingComAffiliate: string,
  language: string,
  currency: string,
  dataSaverEnabled: boolean,
  onBackClicked: () => void,
  coordinates: Coordinates | null,
|};

export default function HotelsStandalonePackage(props: Props) {
  // This reducer is just a wrapper around 'ConfigReducer'. It basically sets
  // default reducer values based on the 'props'.
  const UpdatedConfigReducer = (
    state = {
      dataSaverEnabled: props.dataSaverEnabled,
    },
    action,
  ) => ConfigReducer(state, action);

  const reducers = {
    config: UpdatedConfigReducer,
    hotels: HotelsReducer,
    filters: FiltersReducer,
  };

  return (
    <ReduxContext reducers={reducers}>
      <HotelsStack screenProps={props} />
    </ReduxContext>
  );
}

AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);
