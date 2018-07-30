// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import OneWayFlight from './OneWayFlight';
import ReturnFlight from './ReturnFlight';
import MulticityFlight from './MulticityFlight';
import FlightItemLayout from './FlightItemLayout';
import type { FlightList as FlightListType } from './__generated__/FlightList.graphql';

type Props = {|
  data: FlightListType,
|};

type State = {|
  isPortrait: boolean,
|};

export class FlightList extends React.Component<Props, State> {
  render = () => {
    const flights = idx(this.props, _ => _.data.edges);

    if (!flights) {
      return null;
    }

    return flights.map(flight => {
      const key = idx(flight, _ => _.node.id);
      const type = idx(flight, _ => _.node.__typename);
      const variants: Object = {
        BookingOneWay: <OneWayFlight booking={idx(flight, _ => _.node)} />,
        BookingReturn: <ReturnFlight booking={idx(flight, _ => _.node)} />,
        BookingMulticity: (
          <MulticityFlight booking={idx(flight, _ => _.node)} />
        ),
      };

      let Component = variants.ONE_WAY;
      if (variants[type]) {
        Component = variants[type];
      }

      return <FlightItemLayout key={key}>{Component}</FlightItemLayout>;
    });
  };
}

export default createFragmentContainer(
  FlightList,
  graphql`
    fragment FlightList on BookingInterfaceConnection {
      edges {
        node {
          id
          __typename
          ... on BookingOneWay {
            ...OneWayFlight_booking
          }
          ... on BookingReturn {
            ...ReturnFlight_booking
          }
          ... on BookingMulticity {
            ...MulticityFlight_booking
          }
        }
      }
    }
  `,
);
