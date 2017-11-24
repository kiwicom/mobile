// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { graphql } from 'react-relay';

import AllBookingsListContainer from './AllBookingsList';
import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import LayoutWithoutHeader from '../../components/visual/view/LayoutWithoutHeader';

import type { Navigation } from '../../types/Navigation';

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
          cacheConfig={{
            offline: true,
          }}
        />
      </LayoutWithoutHeader>
    );
  };
}
