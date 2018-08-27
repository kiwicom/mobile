// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import type { FlightServicesMulticity as BookingType } from './__generated__/FlightServicesMulticity.graphql';
import FlightServicesMenuItem from './FlightServicesMenuItem';

type Props = {|
  +onPress: () => void,
  +isActive: boolean,
  +data: BookingType,
|};

const FlightServicesMulticity = ({ data, ...rest }: Props) => {
  return <FlightServicesMenuItem {...rest} data={data.trips} />;
};

export default createFragmentContainer(
  FlightServicesMulticity,
  graphql`
    fragment FlightServicesMulticity on BookingInterface {
      ... on BookingMulticity {
        trips {
          ...FlightServicesMenuItem
        }
      }
    }
  `,
);
