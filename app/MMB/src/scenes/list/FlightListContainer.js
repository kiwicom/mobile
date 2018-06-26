// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Color,
  AdaptableLayout,
  RefreshableScrollView,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';

import FlightList from './FlightList';
import type { FlightListContainer_future as FutureFlightType } from './__generated__/FlightListContainer_future.graphql';
import type { FlightListContainer_past as PastFlightType } from './__generated__/FlightListContainer_past.graphql';

type Props = {|
  +future: FutureFlightType,
  +past: PastFlightType,
  +relay: RelayRefetchProp,
|};

type State = {|
  isRefreshing: boolean,
|};

class FlightListContainer extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  refetch = () => {
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      null,
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
    return (
      <RefreshableScrollView
        contentContainerStyle={styles.container}
        refreshing={this.state.isRefreshing}
        onRefresh={this.refetch}
      >
        <Text style={styles.subtitle}>
          <Translation id="mmb.my_bookings.future_trips" />
        </Text>
        <AdaptableLayout
          renderOnNarrow={<FlightList data={this.props.future} />}
          renderOnWide={
            <View style={styles.tabletWrapper}>
              <FlightList data={this.props.future} />
            </View>
          }
        />
        <Text style={styles.subtitle}>
          <Translation id="mmb.my_bookings.past_trips" />
        </Text>
        <AdaptableLayout
          renderOnNarrow={<FlightList data={this.props.past} />}
          renderOnWide={
            <View style={styles.tabletWrapper}>
              <FlightList data={this.props.past} />
            </View>
          }
        />
      </RefreshableScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 12,
    color: Color.textLight,
  },
  tabletWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default createRefetchContainer(
  FlightListContainer,
  graphql`
    fragment FlightListContainer_future on BookingInterfaceConnection {
      ...FlightList
    }

    fragment FlightListContainer_past on BookingInterfaceConnection {
      ...FlightList
    }
  `,
  graphql`
    query FlightListContainerQuery {
      future: customerBookings(only: FUTURE) {
        ...FlightListContainer_future
      }
      past: customerBookings(only: PAST) {
        ...FlightListContainer_past
      }
    }
  `,
);
