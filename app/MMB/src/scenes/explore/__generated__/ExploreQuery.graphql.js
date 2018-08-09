/**
 * @flow
 * @relayHash c52bec0e3a89b1cf93ab214d6c4f789b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ExploreBookingMulticity$ref = any;
type ExploreBookingOneWay$ref = any;
type ExploreBookingReturn$ref = any;
export type ExploreQueryVariables = {|
  id: number,
  authToken: string,
|};
export type ExploreQueryResponse = {|
  +singleBooking: ?({|
    +__typename: "BookingOneWay",
    +$fragmentRefs: ExploreBookingOneWay$ref,
  |} | {|
    +__typename: "BookingMulticity",
    +$fragmentRefs: ExploreBookingMulticity$ref,
  |} | {|
    +__typename: "BookingReturn",
    +$fragmentRefs: ExploreBookingReturn$ref,
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other"
  |})
|};
*/


/*
query ExploreQuery(
  $id: Int!
  $authToken: String!
) {
  singleBooking(id: $id, authToken: $authToken) {
    __typename
    ... on BookingOneWay {
      ...ExploreBookingOneWay
    }
    ... on BookingMulticity {
      ...ExploreBookingMulticity
    }
    ... on BookingReturn {
      ...ExploreBookingReturn
    }
    id
  }
}

fragment ExploreBookingOneWay on BookingOneWay {
  trip {
    ...ExploreDestinationsGroup
    legs {
      ...ExploreAirportGroup
      id
    }
  }
}

fragment ExploreBookingMulticity on BookingMulticity {
  trips {
    ...ExploreDestinationsGroup
    legs {
      ...ExploreAirportGroup
      id
    }
  }
}

fragment ExploreBookingReturn on BookingReturn {
  outbound {
    ...ExploreDestinationsGroup
    legs {
      ...ExploreAirportGroup
      id
    }
  }
  inbound {
    ...ExploreDestinationsGroup
    legs {
      ...ExploreAirportGroup
      id
    }
  }
}

fragment ExploreDestinationsGroup on Trip {
  departure {
    airport {
      id
      code
      country {
        name
      }
      city {
        name
      }
    }
  }
  arrival {
    airport {
      id
      code
      country {
        name
      }
      city {
        name
      }
    }
  }
}

fragment ExploreAirportGroup on Leg {
  id
  departure {
    airport {
      id
      type
      city {
        name
        code
      }
    }
  }
  arrival {
    airport {
      id
      type
      city {
        name
        code
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "authToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "authToken",
    "variableName": "authToken",
    "type": "String!"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "Int!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = [
  v5
],
v7 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v3,
      v4,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "country",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": v6
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": v6
      }
    ]
  }
],
v8 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v3,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": [
          v5,
          v4
        ]
      }
    ]
  }
],
v9 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v7
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v7
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "legs",
    "storageKey": null,
    "args": null,
    "concreteType": "Leg",
    "plural": true,
    "selections": [
      v3,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "departure",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": v8
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "arrival",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": v8
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ExploreQuery",
  "id": null,
  "text": "query ExploreQuery(\n  $id: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $id, authToken: $authToken) {\n    __typename\n    ... on BookingOneWay {\n      ...ExploreBookingOneWay\n    }\n    ... on BookingMulticity {\n      ...ExploreBookingMulticity\n    }\n    ... on BookingReturn {\n      ...ExploreBookingReturn\n    }\n    id\n  }\n}\n\nfragment ExploreBookingOneWay on BookingOneWay {\n  trip {\n    ...ExploreDestinationsGroup\n    legs {\n      ...ExploreAirportGroup\n      id\n    }\n  }\n}\n\nfragment ExploreBookingMulticity on BookingMulticity {\n  trips {\n    ...ExploreDestinationsGroup\n    legs {\n      ...ExploreAirportGroup\n      id\n    }\n  }\n}\n\nfragment ExploreBookingReturn on BookingReturn {\n  outbound {\n    ...ExploreDestinationsGroup\n    legs {\n      ...ExploreAirportGroup\n      id\n    }\n  }\n  inbound {\n    ...ExploreDestinationsGroup\n    legs {\n      ...ExploreAirportGroup\n      id\n    }\n  }\n}\n\nfragment ExploreDestinationsGroup on Trip {\n  departure {\n    airport {\n      id\n      code\n      country {\n        name\n      }\n      city {\n        name\n      }\n    }\n  }\n  arrival {\n    airport {\n      id\n      code\n      country {\n        name\n      }\n      city {\n        name\n      }\n    }\n  }\n}\n\nfragment ExploreAirportGroup on Leg {\n  id\n  departure {\n    airport {\n      id\n      type\n      city {\n        name\n        code\n      }\n    }\n  }\n  arrival {\n    airport {\n      id\n      type\n      city {\n        name\n        code\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ExploreQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ExploreBookingReturn",
                "args": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ExploreBookingMulticity",
                "args": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ExploreBookingOneWay",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ExploreQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v9
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v9
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trips",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": true,
                "selections": v9
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v9
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
(node/*: any*/).hash = '84cbb17a56eabe5900064ea8c35ac207';
module.exports = node;
