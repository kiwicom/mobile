// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import ExploreText from './ExploreText';
import type { ExploreReturn as BookingType } from './__generated__/ExploreReturn.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreReturn = (props: Props) => (
  <ExploreText data={idx(props.data, _ => _.outbound)} />
);

export default createFragmentContainer(
  ExploreReturn,
  graphql`
    fragment ExploreReturn on BookingInterface {
      ... on BookingReturn {
        outbound {
          ...ExploreText
        }
      }
    }
  `,
);
