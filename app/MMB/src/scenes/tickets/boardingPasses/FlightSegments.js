// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { TextIcon, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import FlightFromTo from './FlightFromTo';
import type { FlightSegments as FlightSegmentsType } from './__generated__/FlightSegments.graphql';

type Props = {|
  +data: FlightSegmentsType,
  +icon: React.Element<typeof TextIcon>,
  +iconTitle: React.Element<typeof Translation>,
|};

const FlightSegments = (props: Props) => {
  const legs = idx(props.data, _ => _.legs) || [];
  const icon = React.cloneElement(props.icon, {
    style: StyleSheet.flatten([styles.icon, props.icon.props.style]),
  });
  return (
    <React.Fragment>
      <View style={styles.row}>
        {icon}
        <Text style={styles.text}>{props.iconTitle}</Text>
      </View>
      <View style={styles.separator}>
        <SeparatorFullWidth />
      </View>
      {legs.map(item => (
        <View style={styles.flightItem} key={idx(item, _ => _.id)}>
          <FlightFromTo data={item} />
        </View>
      ))}
    </React.Fragment>
  );
};

export default createFragmentContainer(
  FlightSegments,
  graphql`
    fragment FlightSegments on Trip {
      legs {
        id
        ...FlightFromTo
      }
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  separator: {
    marginBottom: 20,
    marginTop: 9,
  },
  text: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 12,
    alignSelf: 'center',
  },
  icon: {
    marginEnd: 18,
    fontSize: 18,
  },
  flightItem: {
    marginBottom: 20,
  },
});
