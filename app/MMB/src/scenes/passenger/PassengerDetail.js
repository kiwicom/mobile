// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import { RefreshableScrollView, StyleSheet } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { PassengerDetail_booking as PassengersType } from './__generated__/PassengerDetail_booking.graphql';
import Passenger from './Passenger';
import VisaDisclaimer from './visa/VisaDisclaimer';
import ContactDetails from './contactDetails/ContactDetails';
import Baggage from './baggage/Baggage';

type Props = {|
  +booking: PassengersType,
  +relay: RelayRefetchProp,
|};

type State = {|
  isRefreshing: boolean,
|};

export class PassengerDetail extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  refetch = () => {
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      {
        id: idx(this.props.booking, _ => _.databaseId),
        authToken: idx(this.props.booking, _ => _.authToken),
      },
      null,
      () => {
        this.setState({ isRefreshing: false });
      },
      {
        force: true,
      },
    );
  };

  render = () => {
    const passengers = idx(this.props.booking, _ => _.passengers) || [];

    return (
      <RefreshableScrollView
        refreshing={this.state.isRefreshing}
        onRefresh={this.refetch}
      >
        {passengers.map(passenger => (
          <View
            key={idx(passenger, _ => _.databaseId)}
            style={styles.passengerContainer}
          >
            <Passenger passenger={passenger} />
          </View>
        ))}
        <Baggage data={this.props.booking} />
        <View style={styles.contactDetailsWrapper}>
          <ContactDetails
            contactDetails={idx(this.props.booking, _ => _.contactDetails)}
          />
        </View>
        <View style={styles.visaDisclaimerContainer}>
          <VisaDisclaimer />
        </View>
      </RefreshableScrollView>
    );
  };
}

export default createRefetchContainer(
  PassengerDetail,
  graphql`
    fragment PassengerDetail_booking on BookingInterface {
      databaseId
      authToken
      contactDetails {
        ...ContactDetails_contactDetails
      }
      passengers {
        databaseId
        ...Passenger_passenger
      }
      ...Baggage
    }
  `,
  graphql`
    query PassengerDetailQuery($id: Int!, $authToken: String!) {
      singleBooking(id: $id, authToken: $authToken) {
        ... on BookingInterface {
          ...PassengerDetail_booking
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  visaDisclaimerContainer: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
  contactDetailsWrapper: {
    marginTop: 5,
  },
  passengerContainer: {
    marginTop: 20,
  },
});
