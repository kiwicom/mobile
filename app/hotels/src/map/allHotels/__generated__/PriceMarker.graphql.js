/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type PriceMarker$ref: FragmentReference;
export type PriceMarker = {|
  +amount: ?number,
  +currency: ?string,
  +$refType: PriceMarker$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PriceMarker",
  "type": "Price",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "amount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "currency",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'aaf5bff6b1121a40da4aee6ed74635d1';
module.exports = node;
