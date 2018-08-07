// @flow strict

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import ExploreVariant from './exploreVariants/ExploreVariant';
import type { ExploreOneWay as BookingType } from './__generated__/ExploreOneWay.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreOneWay = (props: Props) => {
  return <ExploreVariant data={idx(props.data, _ => _.trip)} />;
};

export default createFragmentContainer(
  ExploreOneWay,
  graphql`
    fragment ExploreOneWay on BookingInterface {
      ... on BookingOneWay {
        trip {
          ...ExploreVariant
        }
      }
    }
  `,
);
