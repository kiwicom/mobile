// @flow

import { commitMutation, graphql } from 'react-relay';

import createEnvironment from '../../../services/relay/Environment';

import type {
  LoginMutationVariables,
  LoginMutationResponse,
} from './__generated__/LoginMutation.graphql';

const mutation = graphql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      identity {
        fullName
      }
    }
  }
`;

export type Callback = (
  response: $PropertyType<LoginMutationResponse, 'login'>,
  errors: ?[Error],
) => void;

export default (input: LoginMutationVariables, callback: Callback) => {
  commitMutation(createEnvironment(), {
    mutation,
    variables: input,
    onCompleted: (response: LoginMutationResponse, errors) => {
      callback(response.login, errors);
    },
  });
};
