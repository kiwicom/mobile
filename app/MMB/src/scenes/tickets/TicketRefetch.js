// @flow strict

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import { RefreshableScrollView, StyleSheet } from '@kiwicom/mobile-shared';
import idx from 'idx';

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
    this.setState({ isRefreshing: true });

    this.props.relay.refetch(
      {
        id: idx(this.props.data, _ => _.id),
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

  render = () => (
    <RefreshableScrollView
      refreshing={this.state.isRefreshing}
      onRefresh={this.refetch}
      contentContainerStyle={styles.container}
    >
      <ETicket data={idx(this.props.data, _ => _.assets)} />
      <BoardingPasses />
    </RefreshableScrollView>
  );
}

export default createRefetchContainer(
  ETicketRefetch,
  graphql`
    fragment TicketRefetch on BookingInterface {
      id
      assets {
        ...ETicket
      }
    }
  `,
  graphql`
    query TicketRefetchQuery($id: ID!) {
      node(id: $id) {
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
