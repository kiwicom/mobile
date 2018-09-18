// @flow strict

import * as React from 'react';
import { type NavigationType } from '@kiwicom/mobile-navigation';

import NewAllHotelsMap from '../../map/allHotels/NewAllHotelsMap';
import HotelsNavigationOptions from '../HotelsNavigationOptions';
import { withHotelsContext } from '../../HotelsContext';

type Props = {|
  +navigation: NavigationType,
  +cityName: string,
  +checkin: string,
  +checkout: string,
|};

class NewAllHotelsMapNavigationScreen extends React.Component<Props> {
  static navigationOptions = ({ checkin, checkout, cityName }: Props) => {
    return {
      ...HotelsNavigationOptions({
        checkin,
        checkout,
        cityName,
      }),
    };
  };

  render = () => <NewAllHotelsMap />;
}

export default withHotelsContext(({ checkin, checkout, cityName }) => ({
  checkin,
  checkout,
  cityName,
}))(NewAllHotelsMapNavigationScreen);
