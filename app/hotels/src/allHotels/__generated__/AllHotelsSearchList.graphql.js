/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AllHotelsSearchRow$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchList$ref: FragmentReference;
export type AllHotelsSearchList = $ReadOnlyArray<{|
  +node: ?{|
    +id: string,
    +$fragmentRefs: AllHotelsSearchRow$ref,
  |},
  +$refType: AllHotelsSearchList$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AllHotelsSearchList",
  "type": "AllHotelAvailabilityHotelEdge",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "AllHotelAvailabilityHotel",
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
          "kind": "FragmentSpread",
          "name": "AllHotelsSearchRow",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '40ab29e418301787c8e12e7317070f3d';
module.exports = node;
