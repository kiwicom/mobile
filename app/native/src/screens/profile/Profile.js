// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-relay';
import {
  LayoutWithoutHeader,
  SimpleCard,
  VerificationBadge,
  Large as LargeText,
} from '@kiwicom/native-common';

import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import Logout from '../../components/authentication/Logout';

// import type { ProfileQueryResponse } from './__generated__/ProfileQuery.graphql';

type Props = {|
  onLogout: () => void,
|};

const Row = function Row({ children }) {
  return <SimpleCard density="airy">{children}</SimpleCard>;
};

export default class Profile extends React.Component<Props, {}> {
  render = () => {
    return (
      <LayoutWithoutHeader>
        <PrivateApiRenderer
          query={graphql`
            query ProfileQuery {
              currentUser {
                email
                emailVerified
                fullName
                # TODO: profile picture
              }
            }
          `}
          render={(props: Object) => {
            return (
              <View>
                <Row>
                  <LargeText>
                    {props.currentUser && props.currentUser.fullName}
                  </LargeText>
                  <View style={{ flexDirection: 'row' }}>
                    <Text>{props.currentUser && props.currentUser.email} </Text>
                    <VerificationBadge
                      verified={
                        props.currentUser && props.currentUser.emailVerified
                      }
                    />
                  </View>
                </Row>
                {/* TODO: default currency */}
                <Row>
                  <Logout />
                </Row>
              </View>
            );
          }}
        />
      </LayoutWithoutHeader>
    );
  };
}
