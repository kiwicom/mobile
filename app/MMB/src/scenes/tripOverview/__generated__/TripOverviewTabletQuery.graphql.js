/**
 * @flow
 * @relayHash 58c5c57d207318f02c554ac04620603f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TripOverview$ref = any;
export type TripOverviewTabletQueryVariables = {|
  id: string
|};
export type TripOverviewTabletQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: TripOverview$ref
  |}
|};
*/


/*
query TripOverviewTabletQuery(
  $id: ID!
) {
  booking(id: $id) {
    ...TripOverview
    id
  }
}

fragment TripOverview on Booking {
  type
  oneWay {
    ...OneWayTimeline
    id
  }
  return {
    ...ReturnTimeline
    id
  }
  multicity {
    ...MulticityTimeline
    id
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
  legs {
    departure {
      ...TimelineDeparture
    }
    arrival {
      ...TimelineArrival
    }
    id
  }
}

fragment TimelineDeparture on RouteStop {
  localTime
  airport {
    locationId
    city {
      name
    }
  }
}

fragment TimelineArrival on RouteStop {
  localTime
  airport {
    locationId
    city {
      name
    }
  }
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
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "locationId",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "legs",
    "storageKey": null,
    "args": null,
    "concreteType": "Leg",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "departure",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": v2
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "arrival",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": v2
      },
      v3
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TripOverviewTabletQuery",
  "id": null,
  "text": "query TripOverviewTabletQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    ...TripOverview\n    id\n  }\n}\n\nfragment TripOverview on Booking {\n  type\n  oneWay {\n    ...OneWayTimeline\n    id\n  }\n  return {\n    ...ReturnTimeline\n    id\n  }\n  multicity {\n    ...MulticityTimeline\n    id\n  }\n}\n\nfragment OneWayTimeline on BookingOneWay {\n  trip {\n    ...Timeline\n  }\n}\n\nfragment ReturnTimeline on BookingReturn {\n  outbound {\n    ...Timeline\n  }\n  inbound {\n    ...Timeline\n  }\n}\n\nfragment MulticityTimeline on BookingMulticity {\n  trips {\n    ...Timeline\n  }\n}\n\nfragment Timeline on Trip {\n  legs {\n    departure {\n      ...TimelineDeparture\n    }\n    arrival {\n      ...TimelineArrival\n    }\n    id\n  }\n}\n\nfragment TimelineDeparture on RouteStop {\n  localTime\n  airport {\n    locationId\n    city {\n      name\n    }\n  }\n}\n\nfragment TimelineArrival on RouteStop {\n  localTime\n  airport {\n    locationId\n    city {\n      name\n    }\n  }\n}\n",
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
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
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
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
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
            "name": "oneWay",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingOneWay",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v4
              },
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "return",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingReturn",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v4
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v4
              },
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multicity",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingMulticity",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trips",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": true,
                "selections": v4
              },
              v3
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c522a46cc97310ecdee1e2dd8e9b048b';
module.exports = node;
