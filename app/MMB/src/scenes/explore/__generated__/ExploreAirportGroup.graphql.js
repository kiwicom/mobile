/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreAirportGroup$ref: FragmentReference;
export type ExploreAirportGroup = $ReadOnlyArray<{|
  +id: string,
  +departure: ?{|
    +airport: ?{|
      +type: ?string,
      +city: ?{|
        +locationId: ?string,
        +name: ?string,
        +code: ?string,
      |},
    |}
  |},
  +arrival: ?{|
    +airport: ?{|
      +type: ?string,
      +city: ?{|
        +locationId: ?string,
        +name: ?string,
        +code: ?string,
      |},
    |}
  |},
  +$refType: ExploreAirportGroup$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "locationId",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
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
  "name": "ExploreAirportGroup",
  "type": "Leg",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
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
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc7dc7a3f7cf7de9924b7d2895c3f2c4';
module.exports = node;
