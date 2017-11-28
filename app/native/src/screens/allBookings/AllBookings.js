// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { graphql } from 'react-relay';
import { LayoutWithoutHeader, type Navigation } from '@kiwicom/native-common';

import AllBookingsListContainer from './AllBookingsList';
import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';

type Props = {|
  navigation: Navigation,
|};

export default class AllBookings extends React.Component<Props, {}> {
  render = () => {
    return (
      <LayoutWithoutHeader>
        <PrivateApiRenderer
          query={graphql`
            query AllBookingsQuery {
              ...AllBookingsList_bookings
            }
          `}
          render={props => {
            return (
              <ScrollView>
                <AllBookingsListContainer
                  bookings={props}
                  navigation={this.props.navigation}
                />
              </ScrollView>
            );
          }}
        />
      </LayoutWithoutHeader>
    );
  };
}
