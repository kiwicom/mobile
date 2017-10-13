// @flow

import * as React from 'react';
import { View, Text, AsyncStorage, ScrollView } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import Environment from '../../src/Environment';

import BookingsListContainer from './BookingsListContainer';
import SearchForm from '../search/SearchForm';
import GoogleLogin from '../../components/functional/auth/GoogleLogin';
import SimpleLoading from '../../components/visual/loaders/SimpleLoading';

type Props = {
  navigation: {
    navigate: (screen: string, parameters: Object) => void,
  },
};

type State = {
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
      <ScrollView style={{ flex: 1 }}>
        <View>
          <SearchForm
            onSend={(from, to) =>
              navigate('SearchResults', {
                from,
                to,
                date: '2017-11-11',
              })}
          />
        </View>
        <View style={{ flex: 4, backgroundColor: 'powderblue' }}>
          <Text>
            You will see your bookings here after login ({this.state.bookings})...
          </Text>

          <GoogleLogin
            onSuccess={accessToken => this.setState({ accessToken })}
          />

          <QueryRenderer
            environment={Environment}
            query={AllBookingsQuery}
            render={({ error, props }) => {
              // FIXME: it does not catch errors?
              if (error) {
                return <Text>{error.message}</Text>;
              } else if (props) {
                return <BookingsListContainer bookings={props} />;
              }
              return <SimpleLoading/>;
            }}
          />
        </View>
      </ScrollView>
    );
  };
}

const AllBookingsQuery = graphql`
  query HomepageQuery {
    ...BookingsListContainer_bookings
  }
`;
