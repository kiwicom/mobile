// @flow

import * as React from 'react';

import ExploreBookingOneWay from './ExploreBookingOneWay';
import ExploreBookingMulticity from './ExploreBookingMulticity';
import ExploreBookingReturn from './ExploreBookingReturn';
import type { ExploreQuery as ExploreQueryType } from './__generated__/ExploreQuery.graphql';

type Props = {|
  +data: ExploreQueryType,
|};
function GetValidExploreType(props: Props) {
  const data = props.data;
  if (data) {
    switch (data.__typename) {
      case 'BookingOneWay':
        return <ExploreBookingOneWay data={data} type={data.__typename} />;
      case 'BookingMulticity':
        return <ExploreBookingMulticity data={data} type={data.__typename} />;
      case 'BookingReturn':
        return <ExploreBookingReturn data={data} type={data.__typename} />;
      default:
        return null;
    }
  }
  return null;
}

export default GetValidExploreType;
