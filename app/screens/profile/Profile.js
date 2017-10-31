// @flow

import * as React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';

import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import LayoutWithoutHeader from '../../components/visual/view/LayoutWithoutHeader';
import SimpleCard from '../../components/visual/cards/SimpleCard';

import type { ReduxState } from '../../types/Redux';
// import type { ProfileQueryResponse } from './__generated__/ProfileQuery.graphql';

type Props = {
  onLogout: () => void,
  user: $PropertyType<ReduxState, 'user'>,
};

const Row = function Row({ children }) {
  return <SimpleCard density="airy">{children}</SimpleCard>;
};

const Profile = class Profile extends React.PureComponent<Props, {}> {
  render = () => {
    return (
      <LayoutWithoutHeader>
        {this.props.user.logged ? (
          <PrivateApiRenderer
            accessToken={this.props.user.accessToken}
            query={UserInfoQuery}
            render={(props: Object) => {
              return (
                <View>
                  <Row>
                    <Text>
                      {props.currentUser && props.currentUser.fullName}
                    </Text>
                  </Row>
                  <Row>
                    <Text>{props.currentUser && props.currentUser.email} </Text>
                    <Text>
                      {props.currentUser && props.currentUser.emailVerified
                        ? 'VERIFIED'
                        : 'UNVERIFIED'}
                    </Text>
                  </Row>
                  <Row>
                    <Text>TODO: default currency</Text>
                  </Row>
                  <Row>
                    <Button
                      onPress={() => {
                        this.props.onLogout();
                      }}
                      title="Logout"
                    />
                  </Row>
                </View>
              );
            }}
            cacheConfig={{
              offline: true,
            }}
          />
        ) : (
          <Text>Please login first - login form here!</Text>
        )}
      </LayoutWithoutHeader>
    );
  };
};

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    onLogout: () => {
      dispatch({
        type: 'logout',
      });
    },
  }),
)(Profile);

const UserInfoQuery = graphql`
  query ProfileQuery {
    currentUser {
      email
      emailVerified
      fullName
      # TODO: profile picture
    }
  }
`;
