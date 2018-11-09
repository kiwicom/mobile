// @flow strict

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation, DateUtils, Alert } from '@kiwicom/mobile-localization';
import { MenuItem } from '@kiwicom/mobile-navigation';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import type { InsuranceMenuItem as InsuranceMenuItemType } from './__generated__/InsuranceMenuItem.graphql';

type Props = {|
  +onOpenInsurance: () => void,
  +data: InsuranceMenuItemType,
|};

export class InsuranceMenuItem extends React.Component<Props> {
  isMoreThan48HoursBefore = () => {
    const departureTime = this.props.data.departure?.time;
    return (
      departureTime &&
      DateUtils.diffInHours(new Date(departureTime), DateUtils.getUTCNow()) > 48
    );
  };

  onPress = () => {
    if (this.isMoreThan48HoursBefore()) {
      this.props.onOpenInsurance();
    } else {
      Alert.translatedAlert(null, {
        id: 'mmb.trip_services.insurance.no_changes',
      });
    }
  };

  render = () => {
    return (
      <MenuItem
        title={
          <Translation id="mmb.trip_services.general_services.insurance" />
        }
        icon={<TextIcon code="'" />}
        onPress={this.onPress}
      />
    );
  };
}

export default createFragmentContainer(
  InsuranceMenuItem,
  graphql`
    fragment InsuranceMenuItem on Trip {
      departure {
        time
      }
    }
  `,
);
