/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Timeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ReturnTimeline$ref: FragmentReference;
export type ReturnTimeline = {|
  +outbound: ?{|
    +departure: ?{|
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string
        |},
      |},
    |},
    +arrival: ?{|
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string
        |},
      |},
    |},
    +$fragmentRefs: Timeline$ref,
  |},
  +inbound: ?{|
    +departure: ?{|
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string
        |},
      |},
    |},
    +arrival: ?{|
      +localTime: ?any,
      +airport: ?{|
        +locationId: ?string,
        +city: ?{|
          +name: ?string
        |},
      |},
    |},
    +$fragmentRefs: Timeline$ref,
  |},
  +$refType: ReturnTimeline$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
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
v1 = [
  {
    "kind": "FragmentSpread",
    "name": "Timeline",
    "args": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v0
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v0
  }
];
return {
  "kind": "Fragment",
  "name": "ReturnTimeline",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v1
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v1
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bf4f59c3bd4ef2350c870aba599d5896';
module.exports = node;
