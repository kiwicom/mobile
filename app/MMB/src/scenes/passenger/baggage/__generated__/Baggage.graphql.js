/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CabinBags$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Baggage$ref: FragmentReference;
export type Baggage = {|
  +allowedBaggage: ?{|
    +$fragmentRefs: CabinBags$ref
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '70ec293511e4c8806002ef3c6c5860ba';
module.exports = node;
