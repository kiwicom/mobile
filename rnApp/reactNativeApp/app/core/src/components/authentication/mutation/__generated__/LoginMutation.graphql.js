/**
 * @flow
 * @relayHash 9b84e31ad1d5cbd6ab50b0a8e24198e1
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type LoginMutationVariables = {|
  email: string;
  password: string;
|};
export type LoginMutationResponse = {|
  +login: ?{|
    +token: ?string;
    +identity: ?{|
      +fullName: ?string;
    |};
  |};
|};

/*
mutation LoginMutation(
  $email: String!
  $password: String!
) {
  login(email: $email, password: $password) {
    token
    identity {
      fullName
      id
    }
  }
}
*/

const node: ConcreteBatch = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "email",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "password",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Identity",
            "name": "identity",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "fullName",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "LoginMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "email",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "password",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "LoginMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password",
            "type": "String!"
          }
        ],
        "concreteType": "User",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Identity",
            "name": "identity",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "fullName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation LoginMutation(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    token\n    identity {\n      fullName\n      id\n    }\n  }\n}\n"
};

module.exports = node;
