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
      +id: string,
      +type: ?string,
      +city: ?{|
        +name: ?string,
        +code: ?string,
      |},
    |}
  |},
  +arrival: ?{|
    +airport: ?{|
      +id: string,
      +type: ?string,
      +city: ?{|
        +name: ?string,
        +code: ?string,
      |},
    |}
  |},
  +$refType: ExploreAirportGroup$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v0,
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
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v1
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v1
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e6d8ca8d4713aa69bd4fdef4112dbe2b';
module.exports = node;
