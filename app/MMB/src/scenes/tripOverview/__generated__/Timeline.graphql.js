/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TimelineTrip$ref = any;
type TripTitle$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Timeline$ref: FragmentReference;
export type Timeline = $ReadOnlyArray<{|
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
  +legs: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +$fragmentRefs: TripTitle$ref & TimelineTrip$ref,
  +$refType: Timeline$ref,
|}>;
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
];
return {
  "kind": "Fragment",
  "name": "Timeline",
  "type": "Trip",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TripTitle",
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "TimelineTrip",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '78f60992001128d5a426dc9e3d77ce14';
module.exports = node;
