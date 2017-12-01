// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { graphql } from 'react-relay';
import { LayoutWithoutHeader } from '@kiwicom/native-common';

import AllBookingsListContainer from './AllBookingsList';
import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';

import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

export default class AllBookings extends React.Component<Props, {}> {
  renderAllBookingsContent = (props: Props) => (
    <ScrollView>
      <AllBookingsListContainer
        bookings={props}
        navigation={this.props.navigation}
      />
    </ScrollView>
  );

  render = () => {
    return (
      <LayoutWithoutHeader>
        <PrivateApiRenderer
          query={graphql`
            query AllBookingsQuery {
              ...AllBookingsList_bookings
            }
          `}
          render={this.renderAllBookingsContent}
        />
      </LayoutWithoutHeader>
    );
  };
}
