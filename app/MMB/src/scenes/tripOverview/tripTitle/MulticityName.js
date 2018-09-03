// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import type { MulticityName as MulticityNameType } from './__generated__/MulticityName.graphql';
import TripTitleText from './TripTitleText';

type Props = {|
  +data: MulticityNameType,
|};

const MulticityName = (props: Props) => {
  const cityName = idx(props, _ => _.data.airport.city.name);
  if (cityName == null) {
    return null;
  }
  return (
    <TripTitleText>
      <Translation passThrough={cityName} />
    </TripTitleText>
  );
};

export default createFragmentContainer(
  MulticityName,
  graphql`
    fragment MulticityName on RouteStop {
      airport {
        city {
          name
        }
      }
    }
  `,
);
