// @flow

import * as React from 'react';
import { StatusBar } from 'react-native';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';

import SingleHotelMapScreen from '../../map/singleHotel/SingleHotelMapScreen';
import SingleHotelContext from './SingleHotelContext';
import Stay22SingleHotelMapScreen from '../../map/singleHotel/Stay22SingleHotelMapScreen';

type Props = {||};

class SingleHotelMapNavigationScreen extends React.Component<Props> {
  renderInner = ({ apiProvider }) => {
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

  render() {
    return (
      <SingleHotelContext.Consumer>
        {this.renderInner}
      </SingleHotelContext.Consumer>
    );
  }
}

export default withMappedNavigationAndConfigProps(
  SingleHotelMapNavigationScreen,
);
