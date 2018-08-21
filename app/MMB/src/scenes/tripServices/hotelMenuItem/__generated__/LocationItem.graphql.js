/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type LocationPopupButton$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationItem$ref: FragmentReference;
export type LocationItem = {|
  +hotelCity: ?{|
    +id: string,
    +name: ?string,
  |},
  +location: ?{|
    +$fragmentRefs: LocationPopupButton$ref
  |},
  +$refType: LocationItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "LocationItem",
  "type": "HotelServiceRelevantLocation",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "hotelCity",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelCity",
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
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "location",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "LocationPopupButton",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '222000e33988f9e7e2d9ade50907303e';
module.exports = node;
