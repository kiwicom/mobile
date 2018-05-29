// @flow strict

import * as React from 'react';
import { Platform, View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Popup, TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import querystring from 'querystring';
import idx from 'idx';

import LocationPopupButton from './LocationPopupButton';
import MenuItem from '../../components/menu/MenuItem';
import MenuGroup from '../../components/menu/MenuGroup';
import MenuGroupTitle from '../../components/menu/MenuGroupTitle';
import { SeparatorTrimmed } from '../../components/Separators';
import type { LoungeMenuItem as LoungeMenuItemType } from './__generated__/LoungeMenuItem.graphql';

type Props = {|
  +data: LoungeMenuItemType,
  +onOpenWebview: string => void,
|};

type State = {|
  popupVisible: boolean,
|};

class LoungeMenuItem extends React.Component<Props, State> {
  state = {
    popupVisible: false,
  };

  openLoungeLink = (whitelabelURL: string) => {
    this.setState(
      {
        popupVisible: false,
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
    const relevantAirports =
      idx(this.props, _ => _.data.lounge.relevantAirports) || [];

    if (relevantAirports.length === 1) {
      // do not open the modal for only one whitelabel URL (open it directly)
      const whitelabelURL = idx(relevantAirports, _ => _[0].whitelabelURL);
      this.openLoungeLink(whitelabelURL || '');
      return;
    }

    this.setState({
      popupVisible: true,
    });
  };

  hidePopup = () => {
    this.setState({
      popupVisible: false,
    });
  };

  render = () => {
    const lounge = idx(this.props, _ => _.data.lounge);

    if (!lounge) {
      // no lounges available on this trip (do not render the menu item at all)
      return null;
    }

    const relevantAirports = idx(lounge, _ => _.relevantAirports) || [];

    return (
      <React.Fragment>
        <Popup isVisible={this.state.popupVisible} onClose={this.hidePopup}>
          <View style={styleSheet.popupView}>
            <MenuGroupTitle
              title={<Translation id="mmb.trip_services.lounge.popup.title" />}
            />

            <MenuGroup
              customSeparator={
                <SeparatorTrimmed gapSizeStart={15} gapSizeEnd={15} />
              }
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
                  />
                );
              })}
            </MenuGroup>
          </View>
        </Popup>

        <MenuItem
          title={<Translation id="mmb.trip_services.local_services.lounge" />}
          onPress={this.openPopup}
          icon={<TextIcon code="&#xe04e;" />}
        />
      </React.Fragment>
    );
  };
}

export default createFragmentContainer(
  LoungeMenuItem,
  graphql`
    fragment LoungeMenuItem on WhitelabeledServices {
      lounge(departureTime: $departureTime) {
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

const styleSheet = StyleSheet.create({
  popupView: {
    padding: 5,
  },
});
