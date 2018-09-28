/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AllHotelsSearchRow$ref = any;
type MapView$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchList$ref: FragmentReference;
export type AllHotelsSearchList = $ReadOnlyArray<{|
  +node: ?{|
    +id: string,
    +$fragmentRefs: AllHotelsSearchRow$ref,
  |},
  +$fragmentRefs: MapView$ref,
  +$refType: AllHotelsSearchList$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AllHotelsSearchList",
  "type": "HotelAvailabilityEdge",
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
      "concreteType": "HotelAvailability",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "MapView",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '27b5370ff58499fc503291daf2320715';
module.exports = node;
