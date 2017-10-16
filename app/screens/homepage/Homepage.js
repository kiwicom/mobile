// @flow

import * as React from 'react';
import { View, Text, AsyncStorage, ScrollView } from 'react-native';
import { graphql } from 'react-relay';

import BookingsListContainer from './BookingsListContainer';
import SearchForm from './SearchForm';
import SimpleLoading from '../../components/visual/loaders/SimpleLoading';
import PrivateApiRenderer from '../../src/PrivateApiRenderer';
import SingleLoginForm from './SimpleLoginForm';
import LoginMutation from './mutation/Login';

type Props = {
  navigation: {
    navigate: (screen: string, parameters: Object) => void,
  },
};

type State = {
  accessToken: null | string,
  bookings: null | string,
};

export default class Homepage extends React.PureComponent<Props, State> {
  static navigationOptions = {
    title: 'Welcome traveler!',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      accessToken: null,
      bookings: null,
    };
  }

  // $FlowFixMe: following method cannot return promise (fixed in next React release)
  componentDidMount = async () => {
    try {
      // await AsyncStorage.removeItem('@BookingsStore:key');
      const value = await AsyncStorage.getItem('@BookingsStore:key');
      if (value !== null) {
        this.setState({ bookings: value });
      } else {
        await AsyncStorage.setItem('@BookingsStore:key', 'STORED OFFLINE');
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  };

  render = () => {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <SearchForm
          onSend={(from, to, date) =>
            navigate('SearchResults', {
              from,
              to,
              date,
            })}
        />
        {this.state.accessToken ? (
          <PrivateApiRenderer
            accessToken={this.state.accessToken}
            query={AllBookingsQuery}
            render={({ error, props }) => {
              // FIXME: it does not catch errors?
              if (error) {
                return <Text>{error.message}</Text>;
              } else if (props) {
                return <BookingsListContainer bookings={props} />;
              }
              return <SimpleLoading />;
            }}
          />
        ) : (
          <View>
            <Text>Login to see your bookings offline:</Text>
            <SingleLoginForm
              onSend={(username, password) => {
                LoginMutation(username, password, response => {
                  this.setState({ accessToken: response.login && response.login.token });
                });
              }}
            />
          </View>
        )}
      </ScrollView>
    );
  };
}

const AllBookingsQuery = graphql`
  query HomepageQuery {
    ...BookingsListContainer_bookings
  }
`;
