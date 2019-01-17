// @flow strict

import * as React from 'react';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';

import type { HotelCityQueryResponse as HotelCityType } from './__generated__/HotelCityQuery.graphql';
import HotelCityList from './HotelCityList';

type Props = {|
  +onPress: () => void,
  +query: string,
|};

export default class HotelCityQuery extends React.Component<Props> {
  renderInner = (props: HotelCityType) => {
    return (
      <HotelCityList onPress={this.props.onPress} data={props.hotelCities} />
    );
  };

  render() {
    return (
      <PublicApiRenderer
        query={graphql`
          query HotelCityQuery($query: String!) {
            hotelCities(prefix: $query) {
              ...HotelCityList
            }
          }
        `}
        variables={{ query: this.props.query }}
        render={this.renderInner}
      />
    );
  }
}
