// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';

import MapView from './MapScreen';
import type { AllHotelsMapQueryResponse } from './__generated__/AllHotelsMapQuery.graphql';
import type { SearchParams } from '../allHotels/searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../filter/FilterParametersType';

type Props = {|
  cityId: string | null,
  search: SearchParams,
  filter: FilterParams,
  onFilterChange: OnChangeFilterParams => void,
  onGoToSingleHotel: string => void,
|};

class AllHotelsMap extends React.Component<Props> {
  renderInnerComponent = (props: AllHotelsMapQueryResponse) => (
    <MapView data={props.allAvailableHotels} />
  );

  render = () => {
    const { cityId, search, filter } = this.props;

    return (
      <PublicApiRenderer
        query={graphql`
          query AllHotelsMapQuery(
            $search: HotelsSearchInput!
            $filter: HotelsFilterInput
          ) {
            allAvailableHotels(search: $search, filter: $filter) {
              ...MapScreen
            }
          }
        `}
        variables={{
          search: {
            cityId,
            ...search,
          },
          filter,
        }}
        render={this.renderInnerComponent}
        cacheConfig={{ force: true }}
      />
    );
  };
}

export default AllHotelsMap;
