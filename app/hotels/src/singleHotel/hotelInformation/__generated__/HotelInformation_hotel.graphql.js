/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Description_hotel$ref = any;
type Location_hotel$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type HotelInformation_hotel$ref: FragmentReference;
export type HotelInformation_hotel = {|
  +$fragmentRefs: (Location_hotel$ref & Description_hotel$ref),
  +$refType: HotelInformation_hotel$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelInformation_hotel",
  "type": "Hotel",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Location_hotel",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Description_hotel",
      "args": null
    }
  ]
};
(node/*: any*/).hash = '6a889689fff52d0c6ae8e12573c359bb';
module.exports = node;
