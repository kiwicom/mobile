// @flow

import { commitMutation, graphql } from 'react-relay';

import createEnvironment from '../../../src/Environment';

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

export default (email: string, password: string, callback: Function) => {
  commitMutation(createEnvironment(), {
    mutation,
    variables: {
      email,
      password,
    },
    onCompleted: (response, errors) => {
      callback(response, errors);
    },
    // FIXME: onError
  });
};
