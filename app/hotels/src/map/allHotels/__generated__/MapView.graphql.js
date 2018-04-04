/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PriceMarker$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type MapView$ref: FragmentReference;
export type MapView = $ReadOnlyArray<{|
  +node: ?{|
    +id: string,
    +price: ?{|
      +$fragmentRefs: PriceMarker$ref,
    |},
    +hotel: ?{|
      +coordinates: ?{|
        +lat: ?number,
        +lng: ?number,
      |},
    |},
  |},
  +$refType: MapView$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MapView",
  "type": "HotelAvailabilityEdge",
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
      "concreteType": "HotelAvailability",
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
          "name": "hotel",
          "storageKey": null,
          "args": null,
          "concreteType": "Hotel",
          "plural": false,
          "selections": [
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
    }
  ]
};
(node/*: any*/).hash = 'f065bba4ce55930453baf873f16fc063';
module.exports = node;
