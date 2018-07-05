/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CabinBags$ref = any;
type CheckedBaggage$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Baggage$ref: FragmentReference;
export type Baggage = {|
  +allowedBaggage: ?{|
    +$fragmentRefs: CabinBags$ref & CheckedBaggage$ref
  |},
  +$refType: Baggage$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Baggage",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allowedBaggage",
      "storageKey": null,
      "args": null,
      "concreteType": "AllowedBaggage",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CabinBags",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "CheckedBaggage",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b8a6b4efbd75b12e617d3612836f33ee';
module.exports = node;
