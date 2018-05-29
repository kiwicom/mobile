// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import idx from 'idx';

import { SeparatorFullWidth } from '../Separators';
import StatusBar from './StatusBar';
import TripInfo from './TripInfo';
import HeaderImage from './HeaderImage';
import type { HeaderQueryResponse } from './__generated__/HeaderQuery.graphql';

type Props = {|
  bookingId: string,
|};

export default class Header extends React.Component<Props> {
  renderInnerComponent = (rendererProps: HeaderQueryResponse) => {
    const booking = idx(rendererProps, _ => _.booking);
    const isPastBooking = idx(rendererProps.booking, _ => _.isPastBooking);

    return (
      <React.Fragment>
        {isPastBooking ? (
          <HeaderImage data={booking} />
        ) : null /* TODO: Return explore city component */}
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

  render = () => (
    <PrivateApiRenderer
      render={this.renderInnerComponent}
      query={graphql`
        query HeaderQuery($bookingId: ID!) {
          booking(id: $bookingId) {
            isPastBooking
            ...StatusBar
            ...TripInfo
            ...HeaderImage
          }
        }
      `}
      variables={{
        bookingId: this.props.bookingId,
      }}
    />
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.white,
    padding: 10,
    borderStartWidth: 5,
    borderColor: Color.brand,
  },
  separator: {
    marginVertical: 10,
  },
});
