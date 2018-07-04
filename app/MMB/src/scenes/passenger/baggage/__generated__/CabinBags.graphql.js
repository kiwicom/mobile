/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BagInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CabinBags$ref: FragmentReference;
export type CabinBags = {|
  +cabin: ?$ReadOnlyArray<?{|
    +$fragmentRefs: BagInfo$ref
  |}>,
  +$refType: CabinBags$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CabinBags",
  "type": "AllowedBaggage",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "cabin",
      "storageKey": null,
      "args": null,
      "concreteType": "Baggage",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "BagInfo",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b9d0b0a56f98d0e878ddb730c0e072e7';
module.exports = node;
