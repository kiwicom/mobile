// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  Device,
  AdaptableLayout,
  Dimensions,
} from '@kiwicom/mobile-shared';
import idx from 'idx';

import OneWayFlight from './OneWayFlight';
import ReturnFlight from './ReturnFlight';
import MulticityFlight from './MulticityFlight';
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

      return (
        <AdaptableLayout
          key={key}
          renderOnNarrow={<View style={styles.itemContainer}>{Component}</View>}
          renderOnWide={
            <Dimensions.Consumer>
              {dimensions => {
                return (
                  <View
                    style={[
                      styles.itemContainer,
                      Device.isPortrait(dimensions)
                        ? styles.portrait
                        : styles.landscape,
                    ]}
                  >
                    {Component}
                  </View>
                );
              }}
            </Dimensions.Consumer>
          }
        />
      );
    });
  };
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 16,
  },
  portrait: {
    width: '50%',
    paddingEnd: 15,
  },
  landscape: {
    width: '33.3%',
    paddingEnd: 15,
  },
});

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
