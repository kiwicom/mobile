// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import type { FlightServicesReturn as BookingType } from './__generated__/FlightServicesReturn.graphql';
import FlightServicesMenuItem from './FlightServicesMenuItem';

type Props = {|
  +onPress: () => void,
  +isActive: boolean,
  +data: BookingType,
|};

const FlightServicesReturn = ({ data, ...rest }: Props) => {
  return (
    <FlightServicesMenuItem {...rest} data={[data.inbound, data.outbound]} />
  );
};

export default createFragmentContainer(
  FlightServicesReturn,
  graphql`
    fragment FlightServicesReturn on BookingInterface {
      ... on BookingReturn {
        inbound {
          ...FlightServicesMenuItem
        }
        outbound {
          ...FlightServicesMenuItem
        }
      }
    }
  `,
);
