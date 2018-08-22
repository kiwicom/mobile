// @flow strict

import * as React from 'react';
import { Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { MenuItem } from '@kiwicom/mobile-navigation';
import querystring from 'querystring';
import idx from 'idx';

import LocationsPopup from './LocationsPopup';
import LocationPopupButton from './LocationPopupButton';
import type { CarRentalMenuItem as CarRentalMenuItemType } from './__generated__/CarRentalMenuItem.graphql';

type Props = {|
  +data: CarRentalMenuItemType,
  +onOpenWebview: string => void,
|};

type State = {|
  isPopupVisible: boolean,
|};

export class CarRentalMenuItem extends React.Component<Props, State> {
  state = {
    isPopupVisible: false,
  };

  buildWhitelabelURL = (whitelabelURL: string) => {
    return (
      whitelabelURL +
      (whitelabelURL.includes('?') ? '&' : '?') +
      querystring.stringify({
        // hardcoded string for platform identification - mobileapp_android, mobileapp_ios
        adplat: Platform.select({
          android: 'mobileapp_android',
          ios: 'mobileapp_ios',
        }),
        forceMobile: true,
      })
    );
  };

  openLink = (whitelabelURL: string) => {
    this.setState(
      {
        isPopupVisible: false,
      },
      () => this.props.onOpenWebview(this.buildWhitelabelURL(whitelabelURL)),
    );
  };

  openPopup = () => {
    const relevantCities =
      idx(this.props, _ => _.data.carRental.relevantCities) || [];

    if (relevantCities.length === 1) {
      // do not open the modal for only one whitelabel URL (open it directly)
      const whitelabelURL = idx(relevantCities, _ => _[0].whitelabelURL);
      this.openLink(whitelabelURL || '');
      return;
    }

    this.setState({
      isPopupVisible: true,
    });
  };

  hidePopup = () => {
    this.setState({
      isPopupVisible: false,
    });
  };

  render = () => {
    const carRental = idx(this.props, _ => _.data.carRental);

    if (!carRental) {
      // no car rental service available for this trip (do not render the menu item at all)
      return null;
    }

    const relevantCities = idx(carRental, _ => _.relevantCities) || [];

    return (
      <React.Fragment>
        <LocationsPopup
          isVisible={this.state.isPopupVisible}
          onClose={this.hidePopup}
        >
          {relevantCities.map(relevantCity => {
            if (!relevantCity) {
              return null;
            }
            const { whitelabelURL, location } = relevantCity;
            return (
              <LocationPopupButton
                key={whitelabelURL}
                data={location}
                whitelabelURL={whitelabelURL}
                onPress={this.openLink}
              />
            );
          })}
        </LocationsPopup>
        <MenuItem
          title={
            <Translation id="mmb.trip_services.local_services.car_rental" />
          }
          onPress={this.openPopup}
          icon={<TextIcon code="&#xe03a;" />}
        />
      </React.Fragment>
    );
  };
}

export default createFragmentContainer(
  CarRentalMenuItem,
  graphql`
    fragment CarRentalMenuItem on WhitelabeledServices {
      carRental {
        relevantCities {
          whitelabelURL
          location {
            ...LocationPopupButton
          }
        }
      }
    }
  `,
);
