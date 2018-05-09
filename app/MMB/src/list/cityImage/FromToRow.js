// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import TravelTypeIcon from './TravelTypeIcon';
import type { FromToRow_arrival as ArrivalType } from './__generated__/FromToRow_arrival.graphql';
import type { FromToRow_departure as DepartureType } from './__generated__/FromToRow_departure.graphql';

type Props = {|
  departure: DepartureType,
  arrival: ArrivalType,
  type: 'RETURN' | 'ONE_WAY' | 'MULTICITY',
|};

export const FromToRow = (props: Props) => (
  <View style={styles.row}>
    <View style={styles.flexItem}>
      <Text style={[styles.text, styles.cityText]}>
        <Translation
          passThrough={idx(props.departure, _ => _.airport.city.name)}
        />
      </Text>
    </View>
    <View style={[styles.flexItem, styles.iconWrapper]}>
      <TravelTypeIcon type={props.type} />
    </View>
    <View style={[styles.flexItem, styles.arrivalWrapper]}>
      <Text style={[styles.text, styles.cityText]}>
        <Translation
          passThrough={idx(props.arrival, _ => _.airport.city.name)}
        />
      </Text>
    </View>
  </View>
);

export default createFragmentContainer(FromToRow, {
  arrival: graphql`
    fragment FromToRow_arrival on RouteStop {
      airport {
        city {
          name
        }
      }
    }
  `,
  departure: graphql`
    fragment FromToRow_departure on RouteStop {
      airport {
        city {
          name
        }
      }
    }
  `,
});

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cityText: {
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    color: Color.white,
  },
  flexItem: {
    flex: 1,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  arrivalWrapper: {
    alignItems: 'flex-end',
  },
});
