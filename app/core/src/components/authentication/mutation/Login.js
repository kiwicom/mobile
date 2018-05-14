// @flow

import { graphql, commitMutation } from '@kiwicom/mobile-relay';

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
  commitMutation({
    mutation,
    variables: input,
    onCompleted: (response: LoginMutationResponse, errors) => {
      callback(response.login, errors);
    },
  });
};
