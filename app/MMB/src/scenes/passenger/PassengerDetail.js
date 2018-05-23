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
import ContactDetails from './ContactDetails';

type Props = {|
  booking: PassengersType,
  relay: RelayRefetchProp,
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
      },
      null,
      () => {
        this.setState({ isRefreshing: false });
      },
    );
  };

  render = () => {
    const passengers = idx(this.props.booking, _ => _.passengers) || [];
    return (
      <RefreshableScrollView
        refreshing={this.state.isRefreshing}
        onRefresh={this.refetch}
        contentContainerStyle={styles.container}
      >
        {passengers.map(passenger => (
          <Passenger
            key={idx(passenger, _ => _.databaseId)}
            passenger={passenger}
          />
        ))}
        <View style={styles.contactDetailsContainer}>
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
    fragment PassengerDetail_booking on Booking {
      databaseId
      contactDetails {
        ...ContactDetails_contactDetails
      }
      passengers {
        databaseId
        ...Passenger_passenger
      }
    }
  `,
  graphql`
    query PassengerDetailQuery($id: ID!) {
      booking(id: $id) {
        ...PassengerDetail_booking
      }
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  visaDisclaimerContainer: {
    marginTop: 50,
    paddingHorizontal: 15,
  },
  contactDetailsContainer: {
    marginTop: 27,
  },
});
