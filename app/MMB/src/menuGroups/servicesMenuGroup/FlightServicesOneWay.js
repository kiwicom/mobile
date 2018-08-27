// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import type { FlightServicesOneWay as BookingType } from './__generated__/FlightServicesOneWay.graphql';
import FlightServicesMenuItem from './FlightServicesMenuItem';

type Props = {|
  +onPress: () => void,
  +isActive: boolean,
  +data: BookingType,
|};

const FlightServicesOneWay = ({ data, ...rest }: Props) => {
  return <FlightServicesMenuItem {...rest} data={[data.trip]} />;
};

export default createFragmentContainer(
  FlightServicesOneWay,
  graphql`
    fragment FlightServicesOneWay on BookingInterface {
      ... on BookingOneWay {
        trip {
          ...FlightServicesMenuItem
        }
      }
    }
  `,
);
