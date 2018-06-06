// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import type { TripOverview as TripOverviewType } from './__generated__/TripOverview.graphql';

type Props = {|
  +data: TripOverviewType,
|};

function TripOverview(props: Props) {
  return <Translation passThrough={JSON.stringify(props.data)} />;
}

export default createFragmentContainer(
  TripOverview,
  graphql`
    fragment TripOverview on Booking {
      type
    }
  `,
);
