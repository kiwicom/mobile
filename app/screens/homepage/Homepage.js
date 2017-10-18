// @flow

import * as React from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { graphql } from 'react-relay';

import BookingsListContainer from './BookingsList';
import SearchForm from './SearchForm';
import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import SingleLoginForm from './SimpleLoginForm';
import { type AccessToken, createAccessToken } from '../../types/AccessToken';

import type { Navigation } from '../../types/Navigation';

type Props = {
  navigation: Navigation,
};

type State = {
  accessToken: AccessToken,
};

export default class Homepage extends React.PureComponent<Props, State> {
  state = {
    accessToken: createAccessToken(),
  };

  static navigationOptions = {
    title: 'Welcome traveler!',
  };

  componentDidMount = async () => {
    AsyncStorage.getItem('access_token', (error, value) => {
      this.setState({
        accessToken: value,
      });
    });
  };

  render = () => {
    return (
      <ScrollView>
        <SearchForm
          onSend={(from, to, date) =>
            this.props.navigation.navigate('SearchResults', {
              from,
              to,
              date,
            })}
        />
        {this.state.accessToken ? (
          <PrivateApiRenderer
            accessToken={this.state.accessToken}
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
          <SingleLoginForm
            onSend={(response, errors) => {
              if (errors) {
                // TODO: display errors
                console.warn(JSON.stringify(errors)); // eslint-disable-line no-console
              } else {
                const accessToken = createAccessToken(
                  response && response.token,
                );
                this.setState({ accessToken: accessToken });
                AsyncStorage.setItem('access_token', accessToken);
              }
            }}
          />
        )}
      </ScrollView>
    );
  };
}

const AllBookingsQuery = graphql`
  query HomepageQuery {
    ...BookingsList_bookings
  }
`;
