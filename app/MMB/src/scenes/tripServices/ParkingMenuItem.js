// @flow strict

import * as React from 'react';
import { Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation, DeviceInfo } from '@kiwicom/mobile-localization';
import { MenuItem } from '@kiwicom/mobile-navigation';
import querystring from 'querystring';
import idx from 'idx';

import type { ParkingMenuItem as ParkingMenuItemType } from './__generated__/ParkingMenuItem.graphql';

type Props = {|
  +data: ParkingMenuItemType,
  +onOpenWebview: string => void,
|};

class ParkingMenuItem extends React.Component<Props> {
  openLink = () => {
    const whitelabelURL =
      idx(this.props, _ => _.data.parking.whitelabelURL) || '';

    this.props.onOpenWebview(
      whitelabelURL +
        (whitelabelURL.includes('?') ? '&' : '?') +
        querystring.stringify({
          utm_source: 'kiwicom_' + DeviceInfo.getLocaleDashed(), // this should be actually language only but the locale should be fine as well
          utm_medium: 'referral',
          utm_campaign: Platform.select({
            android: 'kiwi-android',
            ios: 'kiwi-ios',
          }),
        }),
    );
  };

  render = () => {
    const parking = idx(this.props, _ => _.data.parking);

    if (!parking) {
      // no parking available for this trip (do not render the menu item at all)
      return null;
    }

    return (
      <MenuItem
        title={<Translation id="mmb.trip_services.local_services.parking" />}
        onPress={this.openLink}
        icon={<TextIcon code="&#xe03e;" orbit={true} />}
      />
    );
  };
}

export default createFragmentContainer(
  ParkingMenuItem,
  graphql`
    fragment ParkingMenuItem on WhitelabeledServices {
      parking {
        whitelabelURL
      }
    }
  `,
);
