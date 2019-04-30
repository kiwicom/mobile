/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Address_address$ref: FragmentReference;
declare export opaque type Address_address$fragmentType: Address_address$ref;
export type Address_address = {|
  +street: ?string,
  +city: ?string,
  +zip: ?string,
  +$refType: Address_address$ref,
|};
export type Address_address$data = Address_address;
export type Address_address$key = {
  +$data?: Address_address$data,
  +$fragmentRefs: Address_address$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Address_address",
  "type": "Address",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "street",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "city",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "zip",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '93a5ea870c5396c97c18f687add95e40';
module.exports = node;
