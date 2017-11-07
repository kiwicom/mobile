/**
 * @flow
 * @relayHash abd4f6add8dda14d083e3a250ee28f8d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type LocationSuggestionsWrapperQueryResponse = {| |};
*/


/*
query LocationSuggestionsWrapperQuery(
  $search: String
  $count: Int!
) {
  ...LocationSuggestions
}

fragment LocationSuggestions on RootQuery {
  allLocations(search: $search, first: $count) {
    edges {
      node {
        locationId
        name
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationSuggestionsWrapperQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationSuggestions",
        "args": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "LocationSuggestionsWrapperQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "LocationSuggestionsWrapperQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "String"
          }
        ],
        "concreteType": "LocationConnection",
        "name": "allLocations",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "LocationEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "locationId",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
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
    ]
  },
  "text": "query LocationSuggestionsWrapperQuery(\n  $search: String\n  $count: Int!\n) {\n  ...LocationSuggestions\n}\n\nfragment LocationSuggestions on RootQuery {\n  allLocations(search: $search, first: $count) {\n    edges {\n      node {\n        locationId\n        name\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
