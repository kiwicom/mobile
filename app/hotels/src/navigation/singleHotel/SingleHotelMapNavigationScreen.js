// @flow

import * as React from 'react';
import { StatusBar } from 'react-native';

import SingleHotelMapScreen from '../../map/singleHotel/SingleHotelMapScreen';
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';
import Stay22SingleHotelMapScreen from '../../map/singleHotel/Stay22SingleHotelMapScreen';

const SingleHotelMapNavigationScreen = () => {
  const { apiProvider }: HotelsContextState = React.useContext(HotelsContext);
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      {apiProvider === 'booking' ? (
        <SingleHotelMapScreen />
      ) : (
        <Stay22SingleHotelMapScreen />
      )}
    </React.Fragment>
  );
};

export default SingleHotelMapNavigationScreen;
