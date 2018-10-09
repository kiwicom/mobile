// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import {
  graphql,
  createFragmentContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import {
  TitledMenuGroup,
  withNavigation,
  type NavigationType,
  type RouteNamesType,
} from '@kiwicom/mobile-navigation';
import idx from 'idx';

import InsuranceMenuItemContainer from './insuranceMenuItem/InsuranceMenuItemContainer';
import type { GeneralServicesMenuGroup as GeneralServicesMenuGroupType } from './__generated__/GeneralServicesMenuGroup.graphql';

type Props = {|
  +data: GeneralServicesMenuGroupType,
  +relay: RelayRefetchProp,
  +navigation: NavigationType,
|};

class GeneralServicesMenuGroup extends React.Component<Props> {
  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate(key, params);
  };

  openInsurance = () => {
    this.navigate('mmb.trip_services.insurance');
  };

  isPastBooking = () => idx(this.props.data, _ => _.isPastBooking);
  isStatusConfirmed = () => idx(this.props.data, _ => _.status) === 'CONFIRMED';

  noUSPassengers = () => {
    const passengers = idx(this.props.data, _ => _.passengers);
    return (
      passengers != null &&
      passengers.every(passenger => {
        const nationality = passenger && passenger.nationality;
        return nationality != null && nationality.toLowerCase() !== 'us';
      })
    );
  };

  displayInsuranceMenuItem = () =>
    !this.isPastBooking() && this.isStatusConfirmed() && this.noUSPassengers();

  render = () => {
    if (!this.displayInsuranceMenuItem()) {
      return null;
    }
    return (
      <TitledMenuGroup
        title={<Translation id="mmb.trip_services.general_services" />}
      >
        <InsuranceMenuItemContainer
          onOpenInsurance={this.openInsurance}
          data={this.props.data}
        />
      </TitledMenuGroup>
    );
  };
}

export default createFragmentContainer(
  withNavigation(GeneralServicesMenuGroup),
  graphql`
    fragment GeneralServicesMenuGroup on BookingInterface {
      databaseId
      authToken
      status
      passengers {
        nationality
      }
      isPastBooking
      ...InsuranceMenuItemContainer
    }
  `,
);
