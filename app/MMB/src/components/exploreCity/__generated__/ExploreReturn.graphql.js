/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreVariant_trip$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreReturn$ref: FragmentReference;
export type ExploreReturn = {|
  +outbound?: ?{|
    +arrival: ?{|
      +time: ?any
    |},
    +$fragmentRefs: ExploreVariant_trip$ref,
  |},
  +inbound?: ?{|
    +$fragmentRefs: ExploreVariant_trip$ref
  |},
  +$refType: ExploreReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "FragmentSpread",
  "name": "ExploreVariant_trip",
  "args": null
};
return {
  "kind": "Fragment",
  "name": "ExploreReturn",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
          "selections": [
            v0,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "arrival",
              "storageKey": null,
              "args": null,
              "concreteType": "RouteStop",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "time",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "inbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": [
            v0
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd401e5f7bf0cc6c36a693335c42279dd';
module.exports = node;
