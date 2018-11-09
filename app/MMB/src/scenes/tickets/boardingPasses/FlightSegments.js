// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { TextIcon, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import BoardingPassRow from '../components/BoardingPassRow';
import FlightFromTo from './FlightFromTo';
import type { FlightSegments as FlightSegmentsType } from './__generated__/FlightSegments.graphql';

type Props = {|
  +data: FlightSegmentsType,
  +icon: React.Element<typeof TextIcon>,
  +iconTitle: React.Element<typeof Translation>,
|};

const FlightSegments = (props: Props) => {
  const legs = props.data.legs ?? [];
  const icon = React.cloneElement(props.icon, {
    style: StyleSheet.flatten([styles.icon, props.icon.props.style]),
  });
  return (
    <React.Fragment>
      <BoardingPassRow
        leftColumn={icon}
        rightColumn={<Text style={styles.text}>{props.iconTitle}</Text>}
      />
      <View style={styles.separator}>
        <SeparatorFullWidth
          color={defaultTokens.paletteCloudLight}
          height={1}
        />
      </View>
      {legs.map(item => (
        <View style={styles.flightItem} key={item?.id}>
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
  separator: {
    marginBottom: 20,
    marginTop: 5,
  },
  text: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 12,
  },
  icon: {
    fontSize: 24,
    alignSelf: 'center',
  },
  flightItem: {
    marginBottom: 20,
  },
});
