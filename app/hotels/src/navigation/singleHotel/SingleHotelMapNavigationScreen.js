// @flow

import * as React from 'react';
import { StatusBar } from 'react-native';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';

import SingleHotelMapScreen from '../../map/singleHotel/SingleHotelMapScreen';
import { withHotelsContext, type ApiProvider } from '../../HotelsContext';
import Stay22SingleHotelMapScreen from '../../map/singleHotel/Stay22SingleHotelMapScreen';

type Props = {|
  +apiProvider: ApiProvider,
|};

const SingleHotelMapNavigationScreen = ({ apiProvider }: Props) => (
  <React.Fragment>
    <StatusBar barStyle="dark-content" />
    {apiProvider === 'booking' ? (
      <SingleHotelMapScreen />
    ) : (
      <Stay22SingleHotelMapScreen />
    )}
  </React.Fragment>
);

const select = ({ apiProvider }) => ({ apiProvider });

export default withMappedNavigationAndConfigProps(
  withHotelsContext(select)(SingleHotelMapNavigationScreen),
);
