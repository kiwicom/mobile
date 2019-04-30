/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Amenities_data$ref: FragmentReference;
declare export opaque type Amenities_data$fragmentType: Amenities_data$ref;
export type Amenities_data = {|
  +amenities: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>,
  +$refType: Amenities_data$ref,
|};
export type Amenities_data$data = Amenities_data;
export type Amenities_data$key = {
  +$data?: Amenities_data$data,
  +$fragmentRefs: Amenities_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Amenities_data",
  "type": "HotelInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "amenities",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelAmenity",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7e641bd1fe22958289564a68b4e34776';
module.exports = node;
