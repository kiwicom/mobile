// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import type { InsuranceMenuItemContainer as InsuranceMenuItemContainerType } from './__generated__/InsuranceMenuItemContainer.graphql';
import InsuranceMenuItem from './InsuranceMenuItem';

type Props = {|
  +onOpenInsurance: () => void,
  +data: InsuranceMenuItemContainerType,
|};

export class InsuranceMenuItemContainer extends React.Component<Props> {
  isPastBooking = () => this.props.data.isPastBooking;
  isStatusConfirmed = () => this.props.data.status === 'CONFIRMED';

  noUSPassengers = () => {
    const passengers = this.props.data.passengers;
    return (
      passengers != null &&
      passengers.every(passenger => {
        const nationality = passenger && passenger.nationality;
        return nationality != null && nationality.toLowerCase() !== 'us';
      })
    );
  };

  displayMenuItem = () =>
    !this.isPastBooking() && this.isStatusConfirmed() && this.noUSPassengers();

  getData = () => {
    const { data } = this.props;
    switch (data.__typename) {
      case 'BookingOneWay':
        return data.trip;
      case 'BookingReturn':
        return data.outbound;
      case 'BookingMulticity':
        return data.trips?.[0];
      default:
        return null;
    }
  };

  render() {
    if (!this.displayMenuItem()) {
      return null;
    }

    return (
      <InsuranceMenuItem
        onOpenInsurance={this.props.onOpenInsurance}
        data={this.getData()}
      />
    );
  }
}

export default createFragmentContainer(
  InsuranceMenuItemContainer,
  graphql`
    fragment InsuranceMenuItemContainer on BookingInterface {
      __typename
      status
      passengers {
        nationality
      }
      isPastBooking
      ... on BookingOneWay {
        trip {
          ...InsuranceMenuItem
        }
      }
      ... on BookingReturn {
        outbound {
          ...InsuranceMenuItem
        }
      }
      ... on BookingMulticity {
        trips {
          ...InsuranceMenuItem
        }
      }
    }
  `,
);
