/**
 * @flow
 * @relayHash eaebb1b07b5f7f1744bc1dd64afbba3b
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type SingleHotelScreenQueryResponse = {|
  +hotel: ?{|
    +photos: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string;
          +lowResUrl: ?string;
          +highResUrl: ?string;
        |};
      |}>;
    |};
  |};
|};

/*
query SingleHotelScreenQuery {
  hotel(id: "aG90ZWw6MjQ4NTM5") {
    photos {
      edges {
        node {
          id
          lowResUrl
          highResUrl
        }
      }
    }
    id
  }
}
*/

const node: ConcreteBatch = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleHotelScreenQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "aG90ZWw6MjQ4NTM5",
            "type": "ID!"
          }
        ],
        "concreteType": "Hotel",
        "name": "hotel",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "HotelPhotoConnection",
            "name": "photos",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "HotelPhotoEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "HotelPhoto",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "lowResUrl",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "highResUrl",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "hotel{\"id\":\"aG90ZWw6MjQ4NTM5\"}"
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SingleHotelScreenQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "SingleHotelScreenQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "aG90ZWw6MjQ4NTM5",
            "type": "ID!"
          }
        ],
        "concreteType": "Hotel",
        "name": "hotel",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "HotelPhotoConnection",
            "name": "photos",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "HotelPhotoEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "HotelPhoto",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "lowResUrl",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "highResUrl",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
        "storageKey": "hotel{\"id\":\"aG90ZWw6MjQ4NTM5\"}"
      }
    ]
  },
  "text": "query SingleHotelScreenQuery {\n  hotel(id: \"aG90ZWw6MjQ4NTM5\") {\n    photos {\n      edges {\n        node {\n          id\n          lowResUrl\n          highResUrl\n        }\n      }\n    }\n    id\n  }\n}\n"
};

module.exports = node;
