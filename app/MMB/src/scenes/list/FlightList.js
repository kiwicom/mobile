// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Device, AdaptableLayout } from '@kiwicom/mobile-shared';
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
  state = {
    isPortrait: true,
  };

  componentDidMount = () => this.onLayoutChange();

  onLayoutChange = () => {
    const isPortrait = Device.isPortrait();
    this.setState({ isPortrait });
  };

  render = () => {
    const flights = idx(this.props, _ => _.data.edges);

    if (!flights) {
      return null;
    }

    return flights.map(flight => {
      const key = idx(flight, _ => _.node.id);
      const type = idx(flight, _ => _.node.type);
      const variants: Object = {
        ONE_WAY: (
          <OneWayFlight booking={idx(flight, _ => _.node.oneWay)} id={key} />
        ),
        RETURN: (
          <ReturnFlight booking={idx(flight, _ => _.node.return)} id={key} />
        ),
        MULTICITY: (
          <MulticityFlight
            booking={idx(flight, _ => _.node.multicity)}
            id={key}
          />
        ),
      };

      let Component = variants.ONE_WAY;
      if (variants[type]) {
        Component = variants[type];
      }

      return (
        <AdaptableLayout.Consumer
          key={key}
          renderOnNarrow={<View style={styles.itemContainer}>{Component}</View>}
          renderOnWide={
            <View
              style={[
                styles.itemContainer,
                this.state.isPortrait ? styles.portrait : styles.landscape,
              ]}
              onLayout={this.onLayoutChange}
            >
              {Component}
            </View>
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
    paddingRight: 15,
  },
  landscape: {
    width: '33.3%',
    paddingRight: 15,
  },
});

export default createFragmentContainer(
  FlightList,
  graphql`
    fragment FlightList on BookingConnection {
      edges {
        node {
          id
          type
          oneWay {
            ...OneWayFlight_booking
          }
          return {
            ...ReturnFlight_booking
          }
          multicity {
            ...MulticityFlight_booking
          }
        }
      }
    }
  `,
);
