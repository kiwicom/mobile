/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type LocationPopupButton$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TransportLocationItem$ref: FragmentReference;
export type TransportLocationItem = {|
  +location: ?{|
    +lat: ?number,
    +lng: ?number,
  |},
  +$fragmentRefs: LocationPopupButton$ref,
  +$refType: TransportLocationItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TransportLocationItem",
  "type": "Location",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "LocationPopupButton",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "location",
      "storageKey": null,
      "args": null,
      "concreteType": "Coordinates",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lat",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lng",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bf137d98958b06eba8a722734618896a';
module.exports = node;
