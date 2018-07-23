// @flow

import React from 'react';
import { withNavigation } from 'react-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { TextButton } from '@kiwicom/mobile-shared';
import {
  type NavigationType,
  type RouteNamesType,
} from '@kiwicom/mobile-navigation';

type Props = {|
  +locationId: string,
  +navigation: NavigationType,
|};
class ExploreAirportButton extends React.Component<Props> {
  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate(key, params);
  };

  handleOpenExplore = () => {
    this.navigate('mmb.explore', {
      locationId: this.props.locationId,
    });
  };
  render() {
    return (
      <TextButton
        title={
          <Translation id="mmb.booking_timeline.explore_airport.button.title" />
        }
        onPress={this.handleOpenExplore}
      />
    );
  }
}

export default withNavigation(ExploreAirportButton);
