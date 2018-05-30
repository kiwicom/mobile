// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import idx from 'idx';

import { SeparatorFullWidth } from '../Separators';
import StatusBar from './StatusBar';
import TripInfo from './TripInfo';
import HeaderImage from './HeaderImage';
import HeaderPlaceholder from './HeaderPlaceholder';
import type { Header as BookingType } from './__generated__/Header.graphql';

type Props = {|
  +data: BookingType,
|};

const Header = (props: Props) => {
  const booking = idx(props, _ => _.data);
  const isPastBooking = idx(props.data, _ => _.isPastBooking);

  return (
    <React.Fragment>
      {isPastBooking ? <HeaderImage data={booking} /> : <HeaderPlaceholder />}
      <View style={styleSheet.wrapper}>
        <StatusBar data={booking} />
        <View style={styleSheet.separator}>
          <SeparatorFullWidth />
        </View>
        <TripInfo data={booking} />
      </View>
    </React.Fragment>
  );
};

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header on Booking {
      isPastBooking
      ...StatusBar
      ...TripInfo
      ...HeaderImage
    }
  `,
);

const styleSheet = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.white,
    padding: 10,
  },
  separator: {
    marginVertical: 10,
  },
});
