/**
 * @flow
 * @relayHash 59ba41305d5c1d4231cf8d675b8b9656
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StatusBar$ref = any;
type TripInfo$ref = any;
export type HeaderQueryVariables = {|
  bookingId: string
|};
export type HeaderQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: StatusBar$ref & TripInfo$ref
  |}
|};
*/


/*
query HeaderQuery(
  $bookingId: ID!
) {
  booking(id: $bookingId) {
    ...StatusBar
    ...TripInfo
    id
  }
}

fragment StatusBar on Booking {
  ...StatusBarIcon
  databaseId
}

fragment TripInfo on Booking {
  type
  oneWay {
    ...TripInfoOneWay
    id
  }
  return {
    ...TripInfoReturn
    id
  }
  multicity {
    ...TripInfoMulticity
    id
  }
}

fragment TripInfoOneWay on BookingOneWay {
  trip {
    departure {
      ...RouteStop
    }
    arrival {
      ...RouteStop
    }
  }
}

fragment TripInfoReturn on BookingReturn {
  outbound {
    departure {
      ...RouteStop
    }
    arrival {
      ...RouteStop
    }
  }
  inbound {
    departure {
      ...RouteStop
    }
    arrival {
      ...RouteStop
    }
  }
}

fragment TripInfoMulticity on BookingMulticity {
  trips {
    departure {
      ...RouteStop
    }
    arrival {
      ...RouteStop
    }
  }
}

fragment RouteStop on RouteStop {
  airport {
    city {
      name
    }
  }
  localTime
}

fragment StatusBarIcon on Booking {
  status
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookingId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "bookingId",
    "type": "ID!"
  }
],
v2 = [
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
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  }
],
v3 = [
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
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HeaderQuery",
  "id": null,
  "text": "query HeaderQuery(\n  $bookingId: ID!\n) {\n  booking(id: $bookingId) {\n    ...StatusBar\n    ...TripInfo\n    id\n  }\n}\n\nfragment StatusBar on Booking {\n  ...StatusBarIcon\n  databaseId\n}\n\nfragment TripInfo on Booking {\n  type\n  oneWay {\n    ...TripInfoOneWay\n    id\n  }\n  return {\n    ...TripInfoReturn\n    id\n  }\n  multicity {\n    ...TripInfoMulticity\n    id\n  }\n}\n\nfragment TripInfoOneWay on BookingOneWay {\n  trip {\n    departure {\n      ...RouteStop\n    }\n    arrival {\n      ...RouteStop\n    }\n  }\n}\n\nfragment TripInfoReturn on BookingReturn {\n  outbound {\n    departure {\n      ...RouteStop\n    }\n    arrival {\n      ...RouteStop\n    }\n  }\n  inbound {\n    departure {\n      ...RouteStop\n    }\n    arrival {\n      ...RouteStop\n    }\n  }\n}\n\nfragment TripInfoMulticity on BookingMulticity {\n  trips {\n    departure {\n      ...RouteStop\n    }\n    arrival {\n      ...RouteStop\n    }\n  }\n}\n\nfragment RouteStop on RouteStop {\n  airport {\n    city {\n      name\n    }\n  }\n  localTime\n}\n\nfragment StatusBarIcon on Booking {\n  status\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeaderQuery",
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
            "name": "StatusBar",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "TripInfo",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeaderQuery",
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
            "name": "status",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "databaseId",
            "args": null,
            "storageKey": null
          },
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
                "selections": v3
              },
              v4
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
                "selections": v3
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v3
              },
              v4
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
                "selections": v3
              },
              v4
            ]
          },
          v4
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8725b91ce7243443b9211e3d3e6c5721';
module.exports = node;
