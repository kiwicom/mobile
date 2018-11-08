/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AdditionalInfo$ref = any;
type MapView_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SingleMap$ref: FragmentReference;
export type SingleMap = {|
  +hotel: ?{|
    +$fragmentRefs: MapView_hotel$ref
  |},
  +$fragmentRefs: AdditionalInfo$ref,
  +$refType: SingleMap$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SingleMap",
  "type": "HotelAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "hotel",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "MapView_hotel",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "AdditionalInfo",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ef00405f0bd4f6acb78f36eaa583ea9b';
module.exports = node;
