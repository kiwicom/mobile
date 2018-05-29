/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CountryFlag$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationPopupButton$ref: FragmentReference;
export type LocationPopupButton = {|
  +city: ?{|
    +name: ?string
  |},
  +locationId: ?string,
  +$fragmentRefs: CountryFlag$ref,
  +$refType: LocationPopupButton$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "LocationPopupButton",
  "type": "Location",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "city",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "locationId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "CountryFlag",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '92ec72b7974a26446d9165826132d83d';
module.exports = node;
