// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import ExploreVariant from './exploreVariants/ExploreVariant';
import type { ExploreMulticity as BookingType } from './__generated__/ExploreMulticity.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreMulticity = (props: Props) => {
  return <ExploreVariant data={idx(props.data, _ => _.trips[0])} />;
};

export default createFragmentContainer(
  ExploreMulticity,
  graphql`
    fragment ExploreMulticity on BookingInterface {
      ... on BookingMulticity {
        trips {
          ...ExploreVariant
        }
      }
    }
  `,
);
