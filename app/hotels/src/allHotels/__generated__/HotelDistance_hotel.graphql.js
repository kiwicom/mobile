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
  "type": "Hotel",
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
(node/*: any*/).hash = '52165dd85627dfb691660f46ccb1da7b';
module.exports = node;
