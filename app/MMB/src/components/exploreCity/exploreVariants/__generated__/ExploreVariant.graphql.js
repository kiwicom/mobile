/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookingConfirmed$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreVariant$ref: FragmentReference;
export type ExploreVariant = {|
  +departure: ?{|
    +time: ?any,
    +$fragmentRefs: BookingConfirmed$ref,
  |},
  +$refType: ExploreVariant$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExploreVariant",
  "type": "Trip",
  "metadata": null,
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
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "BookingConfirmed",
          "args": null
        },
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
};
// prettier-ignore
(node/*: any*/).hash = 'b4696c2a854f00ae8c0b040f3adb2924';
module.exports = node;
