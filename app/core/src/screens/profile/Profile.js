// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-relay';
import {
  SimpleCard,
  VerificationBadge,
  Layout,
  Large as LargeText,
} from '@kiwicom/react-native-app-common';

import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import Logout from '../../components/authentication/Logout';

import type { ProfileQueryResponse } from './__generated__/ProfileQuery.graphql';

type Props = {|
  onLogout: () => void,
|};

const Row = function Row({ children }) {
  return <SimpleCard density="airy">{children}</SimpleCard>;
};

export default class Profile extends React.Component<Props, {}> {
  renderProfileContent = (props: ProfileQueryResponse) => {
    return [
      <Row key="name">
        <LargeText>{props.currentUser && props.currentUser.fullName}</LargeText>
        <View style={{ flexDirection: 'row' }}>
          <Text>{props.currentUser && props.currentUser.email} </Text>
          <VerificationBadge
            verified={
              (props.currentUser && props.currentUser.emailVerified) || false
            }
          />
        </View>
      </Row>,
      <Row key="logout">
        <Logout />
      </Row>,
    ];
  };

  render = () => {
    return (
      <Layout>
        <PrivateApiRenderer
          query={graphql`
            query ProfileQuery {
              currentUser {
                email
                emailVerified
                fullName
              }
            }
          `}
          render={this.renderProfileContent}
        />
      </Layout>
    );
  };
}
