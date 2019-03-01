/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AdditionalInfo_data$ref = any;
type MapView_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SingleMap_hotel$ref: FragmentReference;
export type SingleMap_hotel = {|
  +hotel: ?{|
    +$fragmentRefs: MapView_hotel$ref
  |},
  +$fragmentRefs: AdditionalInfo_data$ref,
  +$refType: SingleMap_hotel$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SingleMap_hotel",
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
      "name": "AdditionalInfo_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'edd4d5d42b70359a56be5dfe4e347adf';
module.exports = node;
