/**
 * @flow
 * @relayHash 84a146d7bf12e804b475eaeaa10a3967
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TripOverview$ref = any;
export type TripOverviewTabletQueryVariables = {|
  id: number,
  authToken: string,
|};
export type TripOverviewTabletQueryResponse = {|
  +singleBooking: ?{|
    +$fragmentRefs: TripOverview$ref
  |}
|};
export type TripOverviewTabletQuery = {|
  variables: TripOverviewTabletQueryVariables,
  response: TripOverviewTabletQueryResponse,
|};
*/


/*
query TripOverviewTabletQuery(
  $id: Int!
  $authToken: String!
) {
  singleBooking(id: $id, authToken: $authToken) {
    __typename
    ...TripOverview
    id
  }
}

fragment TripOverview on BookingInterface {
  __typename
  ... on BookingOneWay {
    ...OneWayTimeline
  }
  ... on BookingReturn {
    ...ReturnTimeline
  }
  ... on BookingMulticity {
    ...MulticityTimeline
  }
}

fragment OneWayTimeline on BookingOneWay {
  trip {
    ...Timeline
  }
}

fragment ReturnTimeline on BookingReturn {
  outbound {
    ...Timeline
  }
  inbound {
    ...Timeline
  }
}

fragment MulticityTimeline on BookingMulticity {
  trips {
    ...Timeline
  }
}

fragment Timeline on Trip {
  ...TripTitle
  departure {
    localTime
    airport {
      locationId
      city {
        name
      }
      id
    }
  }
  arrival {
    localTime
    airport {
      locationId
      city {
        name
      }
      id
    }
  }
  legs {
    id
  }
  ...TimelineTrip
}

fragment TripTitle on Trip {
  ...MulticityTitle
  duration
}

fragment TimelineTrip on Trip {
  legs {
    ...TimelineLegWrapper
    guarantee
    departure {
      ...TimelineDeparture_routeStop
    }
    arrival {
      ...TimelineArrival
      ...TimelineDeparture_arrival
    }
    ...TimelineDeparture_legInfo
    id
  }
}

fragment TimelineLegWrapper on Leg {
  ...TripStopOver
}

fragment TimelineDeparture_routeStop on RouteStop {
  ...TimelineTitle
  ...TimelineTerminal
}

fragment TimelineArrival on RouteStop {
  ...TimelineTitle
}

fragment TimelineDeparture_arrival on RouteStop {
  ...TimelineTerminal
}

fragment TimelineDeparture_legInfo on Leg {
  duration
  flightNumber
  operatingAirline {
    name
    iata
  }
  airline {
    name
    logoUrl
    code
  }
  vehicle {
    model
    manufacturer
  }
}

fragment TimelineTerminal on RouteStop {
  terminal
  airport {
    code
    city {
      name
    }
    id
  }
}

fragment TimelineTitle on RouteStop {
  localTime
  airport {
    locationId
    city {
      name
    }
    id
  }
}

fragment TripStopOver on Leg {
  guarantee
  stopoverDuration
}

fragment MulticityTitle on Trip {
  departure {
    ...MulticityName
  }
  arrival {
    ...MulticityName
  }
}

fragment MulticityName on RouteStop {
  airport {
    city {
      name
    }
    id
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
    "type": "String"
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v3
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
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
      v4,
      v2,
      v5
    ]
  },
  v6
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v10 = [
  v6,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v5,
      v4,
      v2,
      v9
    ]
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "terminal",
    "args": null,
    "storageKey": null
  }
],
v11 = [
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
  v8,
  {
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
        "kind": "ScalarField",
        "alias": null,
        "name": "guarantee",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "stopoverDuration",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "departure",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": v10
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "arrival",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": v10
      },
      v8,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "flightNumber",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "operatingAirline",
        "storageKey": null,
        "args": null,
        "concreteType": "OperatingAirline",
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "iata",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "airline",
        "storageKey": null,
        "args": null,
        "concreteType": "Airline",
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "logoUrl",
            "args": null,
            "storageKey": null
          },
          v9
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "vehicle",
        "storageKey": null,
        "args": null,
        "concreteType": "Vehicle",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "model",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "manufacturer",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TripOverviewTabletQuery",
  "id": null,
  "text": "query TripOverviewTabletQuery(\n  $id: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $id, authToken: $authToken) {\n    __typename\n    ...TripOverview\n    id\n  }\n}\n\nfragment TripOverview on BookingInterface {\n  __typename\n  ... on BookingOneWay {\n    ...OneWayTimeline\n  }\n  ... on BookingReturn {\n    ...ReturnTimeline\n  }\n  ... on BookingMulticity {\n    ...MulticityTimeline\n  }\n}\n\nfragment OneWayTimeline on BookingOneWay {\n  trip {\n    ...Timeline\n  }\n}\n\nfragment ReturnTimeline on BookingReturn {\n  outbound {\n    ...Timeline\n  }\n  inbound {\n    ...Timeline\n  }\n}\n\nfragment MulticityTimeline on BookingMulticity {\n  trips {\n    ...Timeline\n  }\n}\n\nfragment Timeline on Trip {\n  ...TripTitle\n  departure {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n      id\n    }\n  }\n  arrival {\n    localTime\n    airport {\n      locationId\n      city {\n        name\n      }\n      id\n    }\n  }\n  legs {\n    id\n  }\n  ...TimelineTrip\n}\n\nfragment TripTitle on Trip {\n  ...MulticityTitle\n  duration\n}\n\nfragment TimelineTrip on Trip {\n  legs {\n    ...TimelineLegWrapper\n    guarantee\n    departure {\n      ...TimelineDeparture_routeStop\n    }\n    arrival {\n      ...TimelineArrival\n      ...TimelineDeparture_arrival\n    }\n    ...TimelineDeparture_legInfo\n    id\n  }\n}\n\nfragment TimelineLegWrapper on Leg {\n  ...TripStopOver\n}\n\nfragment TimelineDeparture_routeStop on RouteStop {\n  ...TimelineTitle\n  ...TimelineTerminal\n}\n\nfragment TimelineArrival on RouteStop {\n  ...TimelineTitle\n}\n\nfragment TimelineDeparture_arrival on RouteStop {\n  ...TimelineTerminal\n}\n\nfragment TimelineDeparture_legInfo on Leg {\n  duration\n  flightNumber\n  operatingAirline {\n    name\n    iata\n  }\n  airline {\n    name\n    logoUrl\n    code\n  }\n  vehicle {\n    model\n    manufacturer\n  }\n}\n\nfragment TimelineTerminal on RouteStop {\n  terminal\n  airport {\n    code\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment TimelineTitle on RouteStop {\n  localTime\n  airport {\n    locationId\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment TripStopOver on Leg {\n  guarantee\n  stopoverDuration\n}\n\nfragment MulticityTitle on Trip {\n  departure {\n    ...MulticityName\n  }\n  arrival {\n    ...MulticityName\n  }\n}\n\nfragment MulticityName on RouteStop {\n  airport {\n    city {\n      name\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TripOverviewTabletQuery",
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
            "name": "TripOverview",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TripOverviewTabletQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v2,
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
                "selections": v11
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
                "selections": v11
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v11
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
                "selections": v11
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
(node/*: any*/).hash = '006cfa80486c921de7b2e3bd24dafb77';
module.exports = node;
