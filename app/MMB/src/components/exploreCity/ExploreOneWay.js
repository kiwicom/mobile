// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import ExploreText from './ExploreText';
import type { ExploreOneWay as BookingType } from './__generated__/ExploreOneWay.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreOneWay = (props: Props) => (
  <ExploreText data={idx(props.data, _ => _.trip)} />
);

export default createFragmentContainer(
  ExploreOneWay,
  graphql`
    fragment ExploreOneWay on BookingInterface {
      ... on BookingOneWay {
        trip {
          ...ExploreText
        }
      }
    }
  `,
);
