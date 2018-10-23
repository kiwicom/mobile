/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelDistance_hotel$ref: FragmentReference;
export type HotelDistance_hotel = {|
  +distanceFromCenter: ?number,
  +$refType: HotelDistance_hotel$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelDistance_hotel",
  "type": "AllHotelsInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "distanceFromCenter",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3f3ee4ffb6dfe9189b9e421c18839bcf';
module.exports = node;
