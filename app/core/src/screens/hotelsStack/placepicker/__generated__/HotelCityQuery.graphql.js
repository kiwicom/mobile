/**
 * @flow
 * @relayHash 6dddd23878dcb2dba327056b67d1b73f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HotelCityList_data$ref = any;
export type HotelCityQueryVariables = {|
  query: string
|};
export type HotelCityQueryResponse = {|
  +hotelCities: ?{|
    +$fragmentRefs: HotelCityList_data$ref
  |}
|};
export type HotelCityQuery = {|
  variables: HotelCityQueryVariables,
  response: HotelCityQueryResponse,
|};
*/


/*
query HotelCityQuery(
  $query: String!
) {
  hotelCities(prefix: $query) {
    ...HotelCityList_data
  }
}

fragment HotelCityList_data on HotelCityConnection {
  edges {
    node {
      id
      ...HotelCityItem_data
    }
  }
}

fragment HotelCityItem_data on HotelCity {
  id
  name
  location {
    lat
    lng
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "prefix",
    "variableName": "query"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HotelCityQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "hotelCities",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "HotelCityConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HotelCityList_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HotelCityQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "hotelCities",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "HotelCityConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "HotelCityEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelCity",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Coordinates",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lat",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lng",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HotelCityQuery",
    "id": null,
    "text": "query HotelCityQuery(\n  $query: String!\n) {\n  hotelCities(prefix: $query) {\n    ...HotelCityList_data\n  }\n}\n\nfragment HotelCityList_data on HotelCityConnection {\n  edges {\n    node {\n      id\n      ...HotelCityItem_data\n    }\n  }\n}\n\nfragment HotelCityItem_data on HotelCity {\n  id\n  name\n  location {\n    lat\n    lng\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '679b2841f9a6e9dd25e02f24976d816f';
module.exports = node;
