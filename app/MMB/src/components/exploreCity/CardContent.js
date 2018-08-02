// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import idx from 'idx';

import ExploreOneWay from './ExploreOneWay';
import type { CardContent as BookingType } from './__generated__/CardContent.graphql';

type Props = {|
  +data: BookingType,
|};

const CardContent = (props: Props) => {
  const type = idx(props.data, _ => _.__typename);
  return (
    <React.Fragment>
      {type === 'BookingOneWay' && <ExploreOneWay data={props.data} />}
      {/* TODO: Add BookingReturn */}
      {/* TODO: Add BookingMulticity */}
      {/* TODO: Add button */}
    </React.Fragment>
  );
};

export default createFragmentContainer(
  CardContent,
  graphql`
    fragment CardContent on BookingInterface {
      __typename
      ...ExploreOneWay
    }
  `,
);
