// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import idx from 'idx';

import ExploreOneWay from './ExploreOneWay';
import ExploreReturn from './ExploreReturn';
import ExploreMulticity from './ExploreMulticity';
import type { CardContent as BookingType } from './__generated__/CardContent.graphql';

type Props = {|
  +data: BookingType,
|};

const CardContent = (props: Props) => {
  const type = idx(props.data, _ => _.__typename);
  return (
    <React.Fragment>
      {type === 'BookingOneWay' && <ExploreOneWay data={props.data} />}
      {type === 'BookingReturn' && <ExploreReturn data={props.data} />}
      {type === 'BookingMulticity' && <ExploreMulticity data={props.data} />}
    </React.Fragment>
  );
};

export default createFragmentContainer(
  CardContent,
  graphql`
    fragment CardContent on BookingInterface {
      __typename
      ...ExploreOneWay
      ...ExploreReturn
      ...ExploreMulticity
    }
  `,
);
