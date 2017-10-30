// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { graphql } from 'react-relay';
import { connect } from 'react-redux';

import BookingsListContainer from './BookingsList';
import SearchForm from './SearchForm';
import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import SingleLoginForm from './SimpleLoginForm';
import { createAccessToken } from '../../types/AccessToken';
import { contentPadding } from '../../styles/sizes';

import type { Navigation } from '../../types/Navigation';
import type { ReduxState } from '../../types/Redux';

type Props = {
  navigation: Navigation,
  user: $PropertyType<ReduxState, 'user'>,
  onLogin: (accessToken: string) => void,
};

const Homepage = class Homepage extends React.PureComponent<Props> {
  render = () => {
    return (
      <ScrollView style={{ padding: contentPadding }}>
        <SearchForm
          onSend={(from, to, date) =>
            this.props.navigation.navigate('SearchResults', {
              from,
              to,
              date,
            })}
        />
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
            <SingleLoginForm
              onSend={(response, errors) => {
                if (errors) {
                  // TODO: display errors
                  console.warn(JSON.stringify(errors)); // eslint-disable-line no-console
                } else {
                  this.props.onLogin(
                    createAccessToken(response && response.token),
                  );
                }
              }}
            />
          </View>
        )}
      </ScrollView>
    );
  };
};

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
)(Homepage);

const AllBookingsQuery = graphql`
  query HomepageQuery {
    ...BookingsList_bookings
  }
`;
