/**
 * @flow
 * @relayHash eac9ee82045c76563965e57847337f5d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TicketRefetch$ref = any;
export type TicketRefetchQueryVariables = {|
  id: string
|};
export type TicketRefetchQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: TicketRefetch$ref
  |}
|};
*/


/*
query TicketRefetchQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on BookingInterface {
      ...TicketRefetch
    }
    id
  }
}

fragment TicketRefetch on BookingInterface {
  id
  ...BoardingPasses
  assets {
    ...ETicket
  }
}

fragment BoardingPasses on Node {
  __typename
  ... on BookingReturn {
    ...BoardingPassReturn
  }
  ... on BookingOneWay {
    ...BoardingPassOneWay
  }
  ... on BookingMulticity {
    ...BoardingPassMultiCity
  }
}

fragment ETicket on BookingAssets {
  ticketUrl
}

fragment BoardingPassReturn on BookingReturn {
  outbound {
    ...FlightSegments
  }
  inbound {
    ...FlightSegments
  }
}

fragment BoardingPassOneWay on BookingOneWay {
  trip {
    ...FlightSegments
  }
}

fragment BoardingPassMultiCity on BookingMulticity {
  trips {
    arrival {
      airport {
        city {
          name
        }
        id
      }
    }
    ...FlightSegments
  }
}

fragment FlightSegments on Trip {
  legs {
    id
    ...FlightFromTo
  }
}

fragment FlightFromTo on Leg {
  departure {
    localTime
    airport {
      city {
        name
      }
      id
    }
  }
  arrival {
    airport {
      city {
        name
      }
      id
    }
  }
  boardingPass {
    ...DownloadButton
  }
}

fragment DownloadButton on BoardingPass {
  boardingPassUrl
  ...BoardingPassInformation
}

fragment BoardingPassInformation on BoardingPass {
  availableAt
  boardingPassUrl
  ...FutureBookingInformation
}

fragment FutureBookingInformation on BoardingPass {
  boardingPassUrl
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "city",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    v2
  ]
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": [
    v3
  ]
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "legs",
  "storageKey": null,
  "args": null,
  "concreteType": "Leg",
  "plural": true,
  "selections": [
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "localTime",
          "args": null,
          "storageKey": null
        },
        v3
      ]
    },
    v4,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "boardingPass",
      "storageKey": null,
      "args": null,
      "concreteType": "BoardingPass",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "boardingPassUrl",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "availableAt",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
},
v6 = [
  v5
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TicketRefetchQuery",
  "id": null,
  "text": "query TicketRefetchQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on BookingInterface {\n      ...TicketRefetch\n    }\n    id\n  }\n}\n\nfragment TicketRefetch on BookingInterface {\n  id\n  ...BoardingPasses\n  assets {\n    ...ETicket\n  }\n}\n\nfragment BoardingPasses on Node {\n  __typename\n  ... on BookingReturn {\n    ...BoardingPassReturn\n  }\n  ... on BookingOneWay {\n    ...BoardingPassOneWay\n  }\n  ... on BookingMulticity {\n    ...BoardingPassMultiCity\n  }\n}\n\nfragment ETicket on BookingAssets {\n  ticketUrl\n}\n\nfragment BoardingPassReturn on BookingReturn {\n  outbound {\n    ...FlightSegments\n  }\n  inbound {\n    ...FlightSegments\n  }\n}\n\nfragment BoardingPassOneWay on BookingOneWay {\n  trip {\n    ...FlightSegments\n  }\n}\n\nfragment BoardingPassMultiCity on BookingMulticity {\n  trips {\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    ...FlightSegments\n  }\n}\n\nfragment FlightSegments on Trip {\n  legs {\n    id\n    ...FlightFromTo\n  }\n}\n\nfragment FlightFromTo on Leg {\n  departure {\n    localTime\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n  arrival {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n  boardingPass {\n    ...DownloadButton\n  }\n}\n\nfragment DownloadButton on BoardingPass {\n  boardingPassUrl\n  ...BoardingPassInformation\n}\n\nfragment BoardingPassInformation on BoardingPass {\n  availableAt\n  boardingPassUrl\n  ...FutureBookingInformation\n}\n\nfragment FutureBookingInformation on BoardingPass {\n  boardingPassUrl\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TicketRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TicketRefetch",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TicketRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "assets",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingAssets",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ticketUrl",
                "args": null,
                "storageKey": null
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
                "selections": [
                  v4,
                  v5
                ]
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
                "selections": v6
              }
            ]
          },
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
                "selections": v6
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v6
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
(node/*: any*/).hash = 'ac93d2ab12685b3f729e6e0f7b3ffd97';
module.exports = node;
