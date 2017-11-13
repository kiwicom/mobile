// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { graphql } from 'react-relay';
import { connect } from 'react-redux';

import BookingsListContainer from './AllBookingsList';
import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import SingleLoginForm from './SimpleLoginForm';
import LayoutWithoutHeader from '../../components/visual/view/LayoutWithoutHeader';
import GoogleLoginButton from '../../components/authentication/GoogleLogin';

import type { Navigation } from '../../types/Navigation';
import type { ReduxState } from '../../types/Redux';

type Props = {
  navigation: Navigation,
  user: $PropertyType<ReduxState, 'user'>,
  onLogin: (accessToken: string) => void,
};

class AllBookings extends React.Component<Props, {}> {
  static navigationOptions = {
    title: 'All my bookings',
  };

  render = () => {
    return (
      <LayoutWithoutHeader>
        <ScrollView>
          {this.props.user.logged ? (
            <PrivateApiRenderer
              accessToken={this.props.user.accessToken}
              query={AllBookingsQuery}
              render={props => {
                return (
                  <BookingsListContainer
                    bookings={props}
                    navigation={this.props.navigation}
                  />
                );
              }}
              cacheConfig={{
                offline: true,
              }}
            />
          ) : (
            <View style={{ marginTop: 50 }}>
              <GoogleLoginButton
                onSuccess={accessToken => this.props.onLogin(accessToken)}
              />
              <SingleLoginForm
                onSuccess={accessToken => this.props.onLogin(accessToken)}
              />
            </View>
          )}
        </ScrollView>
      </LayoutWithoutHeader>
    );
  };
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    onLogin: accessToken => {
      dispatch({
        type: 'login',
        accessToken,
      });
    },
  }),
)(AllBookings);

const AllBookingsQuery = graphql`
  query AllBookingsQuery {
    ...AllBookingsList_bookings
  }
`;
