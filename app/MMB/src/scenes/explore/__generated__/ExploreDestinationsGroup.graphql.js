/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreDestinationsGroup$ref: FragmentReference;
export type ExploreDestinationsGroup = $ReadOnlyArray<{|
  +departure: ?{|
    +airport: ?{|
      +id: string,
      +code: ?string,
      +country: ?{|
        +name: ?string
      |},
      +city: ?{|
        +name: ?string
      |},
    |}
  |},
  +arrival: ?{|
    +airport: ?{|
      +id: string,
      +code: ?string,
      +country: ?{|
        +name: ?string
      |},
      +city: ?{|
        +name: ?string
      |},
    |}
  |},
  +$refType: ExploreDestinationsGroup$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
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
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "country",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": v0
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": v0
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "ExploreDestinationsGroup",
  "type": "Trip",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
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
(node/*: any*/).hash = '9848c840e1bfa718521d376fc89220d3';
module.exports = node;
