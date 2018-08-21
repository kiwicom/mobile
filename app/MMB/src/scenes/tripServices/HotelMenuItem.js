// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';
import { MenuItem } from '@kiwicom/mobile-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import LocationsPopup from './LocationsPopup';
import LocationPopupButton from './LocationPopupButton';
import type { HotelMenuItem as HotelMenuItemType } from './__generated__/HotelMenuItem.graphql';

type Props = {|
  +data: HotelMenuItemType,
|};

type State = {|
  isPopupVisible: boolean,
|};

class HotelMenuItem extends React.Component<Props, State> {
  state = {
    isPopupVisible: false,
  };

  menuItemOnPress = () => {
    const relevantLocations =
      idx(this.props.data, _ => _.hotel.relevantLocations) || [];
    if (relevantLocations.length === 1) {
      // TODO: Navigate to hotels modal
    } else {
      this.togglePopup();
    }
  };

  togglePopup = () => {
    this.setState(state => ({
      isPopupVisible: !state.isPopupVisible,
    }));
  };

  openHotelsModal = () => {
    // TODO: Navigate to hotels modal
    this.togglePopup();
  };

  render = () => {
    const relevantLocations =
      idx(this.props.data, _ => _.hotel.relevantLocations) || [];

    return (
      <React.Fragment>
        <LocationsPopup
          isVisible={this.state.isPopupVisible}
          onClose={this.togglePopup}
        >
          {relevantLocations.map((relevantLocation, index) => {
            if (!relevantLocation) {
              return null;
            }
            const code = idx(relevantLocation, _ => _.location.id) || '';
            return (
              <LocationPopupButton
                key={`${code}-${index}`}
                data={relevantLocation.location}
                whitelabelURL=""
                onPress={this.openHotelsModal}
                displayIata={false}
              />
            );
          })}
        </LocationsPopup>
        <MenuItem
          title={<Translation id="mmb.trip_services.local_services.hotel" />}
          onPress={this.menuItemOnPress}
          icon={<TextIcon code="&#xe03a;" />}
        />
      </React.Fragment>
    );
  };
}

export default createFragmentContainer(
  HotelMenuItem,
  graphql`
    fragment HotelMenuItem on WhitelabeledServices {
      hotel {
        relevantLocations {
          location {
            id
            ...LocationPopupButton
          }
        }
      }
    }
  `,
);
