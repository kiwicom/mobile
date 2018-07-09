// @flow strict

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import { RefreshableScrollView } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import TripInfo from '../../components/header/TripInfo';
import type { FillTravelDocument as Boooking } from './__generated__/FillTravelDocument.graphql';

type Props = {|
  +data: Boooking,
  +relay: RelayRefetchProp,
|};

type State = {|
  isRefreshing: boolean,
|};

class FillTravelDocument extends React.Component<Props, State> {
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
    >
      <Translation passThrough="TODO: Image" />
      <TripInfo data={this.props.data} />
      <Translation passThrough="TODO: Passengers" />
    </RefreshableScrollView>
  );
}

export default createRefetchContainer(
  FillTravelDocument,
  graphql`
    fragment FillTravelDocument on BookingInterface {
      id
      ...TripInfo
    }
  `,
  graphql`
    query FillTravelDocumentQuery($id: ID!) {
      node(id: $id) {
        ... on BookingInterface {
          ...FillTravelDocument
        }
      }
    }
  `,
);
