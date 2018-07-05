/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BagInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CheckedBaggage$ref: FragmentReference;
export type CheckedBaggage = {|
  +checked: ?$ReadOnlyArray<?{|
    +$fragmentRefs: BagInfo$ref
  |}>,
  +$refType: CheckedBaggage$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CheckedBaggage",
  "type": "AllowedBaggage",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "checked",
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
(node/*: any*/).hash = 'b0467140be1a734dd2a1ccd2773758bb';
module.exports = node;
