/**
 * @flow
 * @relayHash 6faea7c6af31303b68d5d35bbc805618
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
  id
}

fragment ReturnTimeline on BookingReturn {
  id
}

fragment MulticityTimeline on BookingMulticity {
  id
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
v3 = [
  v2
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TripOverviewTabletQuery",
  "id": null,
  "text": "query TripOverviewTabletQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    ...TripOverview\n    id\n  }\n}\n\nfragment TripOverview on Booking {\n  type\n  oneWay {\n    ...OneWayTimeline\n    id\n  }\n  return {\n    ...ReturnTimeline\n    id\n  }\n  multicity {\n    ...MulticityTimeline\n    id\n  }\n}\n\nfragment OneWayTimeline on BookingOneWay {\n  id\n}\n\nfragment ReturnTimeline on BookingReturn {\n  id\n}\n\nfragment MulticityTimeline on BookingMulticity {\n  id\n}\n",
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
            "selections": v3
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "return",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingReturn",
            "plural": false,
            "selections": v3
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multicity",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingMulticity",
            "plural": false,
            "selections": v3
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c522a46cc97310ecdee1e2dd8e9b048b';
module.exports = node;
