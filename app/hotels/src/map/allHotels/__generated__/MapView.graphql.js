/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PriceMarker$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapView$ref: FragmentReference;
export type MapView = $ReadOnlyArray<{|
  +node: ?{|
    +id: string,
    +price: ?{|
      +$fragmentRefs: PriceMarker$ref
    |},
    +coordinates: ?{|
      +lat: ?number,
      +lng: ?number,
    |},
  |},
  +$refType: MapView$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MapView",
  "type": "AllHotelAvailabilityHotelEdge",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "AllHotelAvailabilityHotel",
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
          "kind": "LinkedField",
          "alias": null,
          "name": "price",
          "storageKey": null,
          "args": null,
          "concreteType": "Price",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "PriceMarker",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "coordinates",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f327332c07ce44dd8954ee20e9d83665';
module.exports = node;
