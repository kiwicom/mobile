/**
 * @flow
 * @relayHash dab36fe7e50fb34c650ed086fd3ae320
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TicketRefetch$ref = any;
export type TicketSceneQueryVariables = {|
  bookingId: number,
  authToken: string,
|};
export type TicketSceneQueryResponse = {|
  +singleBooking: ?{|
    +$fragmentRefs: TicketRefetch$ref
  |}
|};
*/


/*
query TicketSceneQuery(
  $bookingId: Int!
  $authToken: String!
) {
  singleBooking(id: $bookingId, authToken: $authToken) {
    __typename
    ...TicketRefetch
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
  id
  airline {
    logoUrl
  }
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
    ...AppleWallet
  }
}

fragment DownloadButton on BoardingPass {
  boardingPassUrl
  ...BoardingPassInformation
}

fragment AppleWallet on BoardingPass {
  pkpasses {
    ...AppleWalletPassenger
    passenger {
      databaseId
    }
  }
}

fragment AppleWalletPassenger on Pkpass {
  url
  passenger {
    fullName
  }
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
    "name": "bookingId",
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
    "variableName": "bookingId",
    "type": "Int!"
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
      "name": "airline",
      "storageKey": null,
      "args": null,
      "concreteType": "Airline",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "logoUrl",
          "args": null,
          "storageKey": null
        }
      ]
    },
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pkpasses",
          "storageKey": null,
          "args": null,
          "concreteType": "Pkpass",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "url",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "passenger",
              "storageKey": null,
              "args": null,
              "concreteType": "Passenger",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "fullName",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "databaseId",
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
},
v6 = [
  v5
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TicketSceneQuery",
  "id": null,
  "text": "query TicketSceneQuery(\n  $bookingId: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $bookingId, authToken: $authToken) {\n    __typename\n    ...TicketRefetch\n    id\n  }\n}\n\nfragment TicketRefetch on BookingInterface {\n  id\n  ...BoardingPasses\n  assets {\n    ...ETicket\n  }\n}\n\nfragment BoardingPasses on Node {\n  __typename\n  ... on BookingReturn {\n    ...BoardingPassReturn\n  }\n  ... on BookingOneWay {\n    ...BoardingPassOneWay\n  }\n  ... on BookingMulticity {\n    ...BoardingPassMultiCity\n  }\n}\n\nfragment ETicket on BookingAssets {\n  ticketUrl\n}\n\nfragment BoardingPassReturn on BookingReturn {\n  outbound {\n    ...FlightSegments\n  }\n  inbound {\n    ...FlightSegments\n  }\n}\n\nfragment BoardingPassOneWay on BookingOneWay {\n  trip {\n    ...FlightSegments\n  }\n}\n\nfragment BoardingPassMultiCity on BookingMulticity {\n  trips {\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    ...FlightSegments\n  }\n}\n\nfragment FlightSegments on Trip {\n  legs {\n    id\n    ...FlightFromTo\n  }\n}\n\nfragment FlightFromTo on Leg {\n  id\n  airline {\n    logoUrl\n  }\n  departure {\n    localTime\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n  arrival {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n  boardingPass {\n    ...DownloadButton\n    ...AppleWallet\n  }\n}\n\nfragment DownloadButton on BoardingPass {\n  boardingPassUrl\n  ...BoardingPassInformation\n}\n\nfragment AppleWallet on BoardingPass {\n  pkpasses {\n    ...AppleWalletPassenger\n    passenger {\n      databaseId\n    }\n  }\n}\n\nfragment AppleWalletPassenger on Pkpass {\n  url\n  passenger {\n    fullName\n  }\n}\n\nfragment BoardingPassInformation on BoardingPass {\n  availableAt\n  boardingPassUrl\n  ...FutureBookingInformation\n}\n\nfragment FutureBookingInformation on BoardingPass {\n  boardingPassUrl\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TicketSceneQuery",
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
    "name": "TicketSceneQuery",
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
(node/*: any*/).hash = '7bb4ef06a1de1893d87c196b5bf16056';
module.exports = node;
