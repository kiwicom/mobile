// @flow strict

import * as React from 'react';
import { Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { MenuItem } from '@kiwicom/mobile-navigation';
import querystring from 'querystring';

import LocationsPopup from './LocationsPopup';
import LocationPopupButton from './LocationPopupButton';
import type { LoungeMenuItem as LoungeMenuItemType } from './__generated__/LoungeMenuItem.graphql';

type Props = {|
  +data: LoungeMenuItemType,
  +onOpenWebview: string => void,
|};

type State = {|
  isPopupVisible: boolean,
|};

class LoungeMenuItem extends React.Component<Props, State> {
  state = {
    isPopupVisible: false,
  };

  openLoungeLink = (whitelabelURL: string) => {
    this.setState(
      {
        isPopupVisible: false,
      },
      () =>
        this.props.onOpenWebview(
          whitelabelURL +
            (whitelabelURL.includes('?') ? '&' : '?') +
            querystring.stringify({
              source: 'aff--kiwi',
              utm_source: 'kiwi',
              utm_medium: 'link',
              utm_campaign: Platform.select({
                android: 'kiwi_android',
                ios: 'kiwi_ios',
              }),
            }),
        ),
    );
  };

  openPopup = () => {
    const relevantAirports = this.props.data.lounge?.relevantAirports ?? [];

    if (relevantAirports.length === 1) {
      // do not open the modal for only one whitelabel URL (open it directly)
      const whitelabelURL = relevantAirports[0]?.whitelabelURL;
      this.openLoungeLink(whitelabelURL || '');
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

  render() {
    const lounge = this.props.data.lounge;

    if (!lounge) {
      // no lounges available on this trip (do not render the menu item at all)
      return null;
    }

    const relevantAirports = lounge.relevantAirports ?? [];

    return (
      <React.Fragment>
        <LocationsPopup
          isVisible={this.state.isPopupVisible}
          onClose={this.hidePopup}
        >
          {relevantAirports.map(relevantAirport => {
            if (!relevantAirport) {
              return null;
            }
            const { whitelabelURL, location } = relevantAirport;
            return (
              <LocationPopupButton
                key={whitelabelURL}
                data={location}
                whitelabelURL={whitelabelURL}
                onPress={this.openLoungeLink}
                displayIata={true}
              />
            );
          })}
        </LocationsPopup>

        <MenuItem
          title={<Translation id="mmb.trip_services.local_services.lounge" />}
          onPress={this.openPopup}
          icon={<TextIcon code="&#xe04e;" />}
        />
      </React.Fragment>
    );
  }
}

export default createFragmentContainer(
  LoungeMenuItem,
  graphql`
    fragment LoungeMenuItem on WhitelabeledServices {
      lounge {
        relevantAirports {
          whitelabelURL
          location {
            ...LocationPopupButton
          }
        }
      }
    }
  `,
);
