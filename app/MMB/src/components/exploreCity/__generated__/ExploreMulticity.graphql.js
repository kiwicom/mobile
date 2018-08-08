/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreVariant_trip$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreMulticity$ref: FragmentReference;
export type ExploreMulticity = {|
  +trips?: ?$ReadOnlyArray<?{|
    +arrival: ?{|
      +time: ?any
    |},
    +departure: ?{|
      +time: ?any
    |},
    +$fragmentRefs: ExploreVariant_trip$ref,
  |}>,
  +$refType: ExploreMulticity$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "ExploreMulticity",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
              "name": "departure",
              "storageKey": null,
              "args": null,
              "concreteType": "RouteStop",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "FragmentSpread",
              "name": "ExploreVariant_trip",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '64ecbec1037ac0fed570676a68e01b28';
module.exports = node;
