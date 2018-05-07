/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Facilities_facilities$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Description_hotel$ref: FragmentReference;
export type Description_hotel = {|
  +summary: ?string,
  +facilities: ?{|
    +$fragmentRefs: Facilities_facilities$ref
  |},
  +$refType: Description_hotel$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Description_hotel",
  "type": "Hotel",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "summary",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "facilities",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelFacilityConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Facilities_facilities",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a8dc37c0c1537f8411375bcee3e3aac9';
module.exports = node;
