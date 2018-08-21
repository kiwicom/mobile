// @flow strict

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import type { InsuranceMenuItemContainer as InsuranceMenuItemContainerType } from './__generated__/InsuranceMenuItemContainer.graphql';
import InsuranceMenuItem from './InsuranceMenuItem';

type Props = {|
  +onOpenInsurance: () => void,
  +data: InsuranceMenuItemContainerType,
|};

export class InsuranceMenuItemContainer extends React.Component<Props> {
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

  displayMenuItem = () =>
    !this.isPastBooking() && this.isStatusConfirmed() && this.noUSPassengers();

  getData = () => {
    switch (this.props.data.__typename) {
      case 'BookingOneWay':
        return idx(this.props.data, _ => _.trip);
      case 'BookingReturn':
        return idx(this.props.data, _ => _.outbound);
      case 'BookingMulticity':
        return idx(this.props.data, _ => _.trips[0]);
      default:
        return null;
    }
  };

  render = () => {
    if (!this.displayMenuItem()) {
      return null;
    }

    return (
      <InsuranceMenuItem
        onOpenInsurance={this.props.onOpenInsurance}
        data={this.getData()}
      />
    );
  };
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
