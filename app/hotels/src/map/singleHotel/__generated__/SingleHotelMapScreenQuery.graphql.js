/**
 * @flow
 * @relayHash af0eb74dd77ec6d174c0f3769f9595e9
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type SingleHotelMapScreenQueryResponse = {|
  +availableHotel: ?{|
    +hotel: ?{| |};
  |};
|};

/*
query SingleHotelMapScreenQuery(
  $search: AvailableHotelSearchInput!
  $options: AvailableHotelOptionsInput
) {
  availableHotel(search: $search, options: $options) {
    hotel {
      ...MapView_hotel
      id
    }
    id
  }
}

fragment MapView_hotel on Hotel {
  coordinates {
    lat
    lng
  }
}
*/

const node: ConcreteBatch = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "AvailableHotelSearchInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "options",
        "type": "AvailableHotelOptionsInput",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleHotelMapScreenQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "options",
            "variableName": "options",
            "type": "AvailableHotelOptionsInput"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "AvailableHotelSearchInput!"
          }
        ],
        "concreteType": "HotelAvailability",
        "name": "availableHotel",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Hotel",
            "name": "hotel",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "MapView_hotel",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SingleHotelMapScreenQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "AvailableHotelSearchInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "options",
        "type": "AvailableHotelOptionsInput",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SingleHotelMapScreenQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "options",
            "variableName": "options",
            "type": "AvailableHotelOptionsInput"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "AvailableHotelSearchInput!"
          }
        ],
        "concreteType": "HotelAvailability",
        "name": "availableHotel",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Hotel",
            "name": "hotel",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Coordinates",
                "name": "coordinates",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "lat",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "lng",
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
    ]
  },
  "text": "query SingleHotelMapScreenQuery(\n  $search: AvailableHotelSearchInput!\n  $options: AvailableHotelOptionsInput\n) {\n  availableHotel(search: $search, options: $options) {\n    hotel {\n      ...MapView_hotel\n      id\n    }\n    id\n  }\n}\n\nfragment MapView_hotel on Hotel {\n  coordinates {\n    lat\n    lng\n  }\n}\n"
};

module.exports = node;
