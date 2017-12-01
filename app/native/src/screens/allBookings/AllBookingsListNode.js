// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import BookingOverviewRow from '../../components/bookings/OverviewRow';

import type { AllBookingsListNode as AllBookingsListNodeType } from './__generated__/AllBookingsListNode.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  data: AllBookingsListNodeType,
  navigation: Navigation,
  showSeparator: boolean,
};

class AllBookingsListNode extends React.Component<Props> {
  handleRowPress = () => {
    const { data } = this.props;
    return this.props.navigation.navigate('SingleBooking', {
      bookingId: data && data.id,
      bookingDatabaseId: data && data.databaseId,
    });
  };

  render = () => {
    return (
      <BookingOverviewRow
        node={this.props.data}
        onPress={this.handleRowPress}
        showSeparator={this.props.showSeparator}
      />
    );
  };
}

export default createFragmentContainer(
  AllBookingsListNode,
  graphql`
    fragment AllBookingsListNode on Booking {
      id
      databaseId
      ...OverviewRow_node
    }
  `,
);
