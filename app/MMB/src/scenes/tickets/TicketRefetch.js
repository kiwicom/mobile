// @flow strict

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import { RefreshableScrollView, StyleSheet } from '@kiwicom/mobile-shared';

import ETicket from './ETicket';
import BoardingPasses from './boardingPasses/BoardingPasses';
import type { ETicketRefetch as BookingType } from './__generated__/TicketRefetch.graphql';

type Props = {|
  +data: BookingType,
  +relay: RelayRefetchProp,
|};

type State = {|
  isRefreshing: boolean,
|};

class ETicketRefetch extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  refetch = () => {
    const { data } = this.props;
    this.setState({ isRefreshing: true });

    this.props.relay.refetch(
      {
        id: data.databaseId,
        authToken: data.authToken,
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

  render() {
    return (
      <RefreshableScrollView
        refreshing={this.state.isRefreshing}
        onRefresh={this.refetch}
        contentContainerStyle={styles.container}
      >
        <ETicket data={this.props.data.assets} />
        <BoardingPasses data={this.props.data} />
      </RefreshableScrollView>
    );
  }
}

export default createRefetchContainer(
  ETicketRefetch,
  graphql`
    fragment TicketRefetch on BookingInterface {
      databaseId
      authToken
      ...BoardingPasses
      assets {
        ...ETicket
      }
    }
  `,
  graphql`
    query TicketRefetchQuery($id: Int!, $authToken: String!) {
      singleBooking(id: $id, authToken: $authToken) {
        ... on BookingInterface {
          ...TicketRefetch
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
