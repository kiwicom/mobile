// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import { RefreshableScrollView, StyleSheet } from '@kiwicom/mobile-shared';

import CityImage from '../../components/CityImage';
import TripInfo from '../../components/header/TripInfo';
import PassengerTravelDocumentMenuGroup from './PassengerTravelDocumentMenuGroup';
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
      >
        <View style={styles.imageContainer}>
          <CityImage url={this.props.data.destinationImageUrl} />
        </View>
        <TripInfo data={this.props.data} />
        <PassengerTravelDocumentMenuGroup data={this.props.data} />
      </RefreshableScrollView>
    );
  }
}

export default createRefetchContainer(
  FillTravelDocument,
  graphql`
    fragment FillTravelDocument on BookingInterface {
      databaseId
      authToken
      destinationImageUrl(dimensions: _375x165)
      ...TripInfo
      ...PassengerTravelDocumentMenuGroup
    }
  `,
  graphql`
    query FillTravelDocumentQuery($id: Int!, $authToken: String!) {
      singleBooking(id: $id, authToken: $authToken) {
        ... on BookingInterface {
          ...FillTravelDocument
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 152,
  },
});
