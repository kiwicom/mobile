// @flow

import { graphql, commitMutation, PublicEnvironment } from '@kiwicom/mobile-relay';

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

const LoginMutation = (input: LoginMutationVariables, callback: Callback) => {
  const environment = PublicEnvironment.getEnvironment();
  commitMutation(environment, {
    mutation,
    variables: input,
    onCompleted: (response: LoginMutationResponse, errors) => {
      callback(response.login, errors);
    },
  });
};

export default LoginMutation;
