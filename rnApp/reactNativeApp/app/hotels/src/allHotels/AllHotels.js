// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import { Layout } from '@kiwicom/react-native-app-common';

import SearchForm from './searchForm/SearchForm';
import FilterStripe from '../filter/FilterStripe';
import AllHotelsSearchList from './AllHotelsSearchList';
import type { AllHotelsSearchQueryResponse } from './__generated__/AllHotelsSearchQuery.graphql';
import type { SearchParametersType } from './searchForm/SearchParametersType';
import type { AvailableHotelSearchInput } from '../singleHotel';

type Props = {|
  search: SearchParametersType,
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  onFilterChange: (filter: SearchParametersType) => void,
|};

export default class AllHotelsSearch extends React.Component<Props> {
  handleSearchChange = (search: SearchParametersType) => {
    this.props.onFilterChange(search);
  };

  isReadyToSearch = (): boolean => {
    const { search: s } = this.props;
    return (
      s.latitude !== null &&
      s.longitude !== null &&
      s.checkin !== null &&
      s.checkout !== null
    );
  };

  handleOpenSingleHotel = (hotelId: string) => {
    const searchProps = this.props.search;
    if (searchProps.checkin && searchProps.checkout) {
      this.props.openSingleHotel({
        hotelId,
        checkin: searchProps.checkin,
        checkout: searchProps.checkout,
        roomsConfiguration: [
          {
            adultsCount: searchProps.roomsConfiguration.adultsCount,
            children: searchProps.roomsConfiguration.children.map(childAge => ({
              age: childAge,
            })),
          },
        ],
      });
    }
  };

  renderInnerComponent = (propsFromRenderer: AllHotelsSearchQueryResponse) => (
    <AllHotelsSearchList
      data={propsFromRenderer.allHotels}
      openSingleHotel={this.handleOpenSingleHotel}
    />
  );

  render = () => {
    const { search } = this.props;
    return (
      <Layout>
        <SearchForm onChange={this.handleSearchChange} />
        <FilterStripe />
        {this.isReadyToSearch() && (
          <PublicApiRenderer
            query={graphql`
              query AllHotelsSearchQuery($search: HotelsSearchInput!) {
                allHotels: allAvailableHotels(search: $search) {
                  ...AllHotelsSearchList
                }
              }
            `}
            variables={{ search }}
            render={this.renderInnerComponent}
            cacheConfig={{
              force: true,
            }}
          />
        )}
      </Layout>
    );
  };
}
