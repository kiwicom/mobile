// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import moment from 'moment';

import MapView from './MapScreen';
import type { AllHotelsMapQueryResponse } from './__generated__/AllHotelsMapQuery.graphql';

type Props = {|
  onGoToSingleHotel: string => void,
|};

class AllHotelsMap extends React.Component<Props> {
  searchVariables: Object;

  constructor(props: Props) {
    super(props);

    // todo will be replaced with props from core package
    this.searchVariables = {
      latitude: 50.08,
      longitude: 14.44,
      checkin: moment()
        .add(1, 'week')
        .startOf('isoWeek')
        .format('YYYY-MM-DD'),
      checkout: moment()
        .add(1, 'week')
        .endOf('isoWeek')
        .format('YYYY-MM-DD'),
      roomsConfiguration: {
        adultsCount: 1,
      },
    };
  }

  renderInnerComponent = (props: AllHotelsMapQueryResponse) => (
    <MapView data={props.allAvailableHotels} />
  );

  render = () => {
    return (
      <PublicApiRenderer
        query={graphql`
          query AllHotelsMapQuery($search: HotelsSearchInput!) {
            allAvailableHotels(search: $search) {
              ...MapScreen
            }
          }
        `}
        variables={{
          search: this.searchVariables,
        }}
        render={this.renderInnerComponent}
        cacheConfig={{ force: true }}
      />
    );
  };
}

export default AllHotelsMap;
