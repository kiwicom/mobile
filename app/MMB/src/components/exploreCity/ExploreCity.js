// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { SimpleCard, StyleSheet } from '@kiwicom/mobile-shared';

import CardContent from './CardContent';
import type { ExploreCity as BookingType } from './__generated__/ExploreCity.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreCity = (props: Props) => (
  <View style={styles.container}>
    <SimpleCard style={styles.card}>
      <CardContent data={props.data} />
    </SimpleCard>
  </View>
);

export default createFragmentContainer(
  ExploreCity,
  graphql`
    fragment ExploreCity on BookingInterface {
      ...CardContent
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    marginTop: 21,
  },
  card: {
    paddingTop: 20,
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
});
