// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { MenuItem } from '@kiwicom/mobile-navigation';
import idx from 'idx';

import LocationsPopup from './LocationsPopup';
import LocationPopupButton from './LocationPopupButton';
import type { TransportationMenuItem as TransportationMenuItemType } from './__generated__/TransportationMenuItem.graphql';

type Props = {|
  +data: TransportationMenuItemType,
  +onOpenWebview: string => void,
|};

type State = {|
  isPopupVisible: boolean,
|};

class TransportationMenuItem extends React.Component<Props, State> {
  state = {
    isPopupVisible: false,
  };

  openTransportationLink = (whitelabelURL: string) => {
    this.setState(
      {
        isPopupVisible: false,
      },
      () => this.props.onOpenWebview(whitelabelURL),
    );
  };

  openPopup = () => {
    const relevantLocations =
      idx(this.props, _ => _.data.transportation.relevantLocations) || [];

    if (relevantLocations.length === 1) {
      // do not open the modal for only one whitelabel URL (open it directly)
      const whitelabelURL = idx(relevantLocations, _ => _[0].whitelabelURL);
      this.openTransportationLink(whitelabelURL || '');
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
    const transport = idx(this.props, _ => _.data.transportation);

    if (!transport) {
      return null;
    }

    const relevantLocations = idx(transport, _ => _.relevantLocations) || [];

    return (
      <React.Fragment>
        <LocationsPopup
          isVisible={this.state.isPopupVisible}
          onClose={this.hidePopup}
        >
          {relevantLocations.map((relevantLocation, index) => {
            if (!relevantLocation) {
              return null;
            }
            const { whitelabelURL, location, date } = relevantLocation;
            return (
              <LocationPopupButton
                key={whitelabelURL}
                data={location}
                date={
                  index > 0 && index < relevantLocations.length - 1
                    ? null
                    : date
                }
                whitelabelURL={whitelabelURL}
                onPress={this.openTransportationLink}
                displayIata={false}
              />
            );
          })}
        </LocationsPopup>

        <MenuItem
          title={
            <Translation id="mmb.trip_services.local_services.transportation" />
          }
          onPress={this.openPopup}
          icon={<TextIcon code=";" />}
        />
      </React.Fragment>
    );
  };
}

export default createFragmentContainer(
  TransportationMenuItem,
  graphql`
    fragment TransportationMenuItem on WhitelabeledServices {
      transportation {
        relevantLocations {
          whitelabelURL
          location {
            ...LocationPopupButton
          }
          date
        }
      }
    }
  `,
);
