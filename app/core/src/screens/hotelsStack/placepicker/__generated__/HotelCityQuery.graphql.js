/**
 * @flow
 * @relayHash 362f8f028a053ff5353b0b6313a4c171
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HotelCityList$ref = any;
export type HotelCityQueryVariables = {|
  query: string
|};
export type HotelCityQueryResponse = {|
  +hotelCities: ?{|
    +$fragmentRefs: HotelCityList$ref
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
    ...HotelCityList
  }
}

fragment HotelCityList on HotelCityConnection {
  edges {
    node {
      id
      ...HotelCityItem
    }
  }
}

fragment HotelCityItem on HotelCity {
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
    "variableName": "query",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HotelCityQuery",
  "id": null,
  "text": "query HotelCityQuery(\n  $query: String!\n) {\n  hotelCities(prefix: $query) {\n    ...HotelCityList\n  }\n}\n\nfragment HotelCityList on HotelCityConnection {\n  edges {\n    node {\n      id\n      ...HotelCityItem\n    }\n  }\n}\n\nfragment HotelCityItem on HotelCity {\n  id\n  name\n  location {\n    lat\n    lng\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HotelCityQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "hotelCities",
        "storageKey": null,
        "args": v1,
        "concreteType": "HotelCityConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HotelCityList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HotelCityQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "hotelCities",
        "storageKey": null,
        "args": v1,
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
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8136fb53fb26b214fddcf832cc7e74d5';
module.exports = node;
