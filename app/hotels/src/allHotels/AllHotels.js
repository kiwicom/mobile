// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';

import AllHotelsSearchList from './AllHotelsSearchList';

import type { AllHotelsSearchQueryResponse } from './__generated__/AllHotelsSearchQuery.graphql';

type Props = {|
  onGoToSingleHotel: () => void,
|};

export default class AllHotelsSearch extends React.Component<Props> {
  renderInnerComponent = (propsFromRenderer: AllHotelsSearchQueryResponse) => (
    <AllHotelsSearchList
      data={propsFromRenderer.allHotels}
      onGoToSingleHotel={this.props.onGoToSingleHotel}
    />
  );

  render = () => (
    <PublicApiRenderer
      query={graphql`
        query AllHotelsSearchQuery($search: HotelsSearchInput!) {
          allHotels(search: $search) {
            ...AllHotelsSearchList
          }
        }
      `}
      variables={{
        search: {
          // TODO: values from form
          latitude: 50.08,
          longitude: 14.44,
          checkin: '2018-01-01',
          checkout: '2018-01-15',
          roomsConfiguration: {
            adultsCount: 1,
          },
        },
      }}
      render={this.renderInnerComponent}
      cacheConfig={{
        force: true,
      }}
    />
  );
}
