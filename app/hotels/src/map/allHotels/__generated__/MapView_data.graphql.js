/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PriceMarker_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapView_data$ref: FragmentReference;
export type MapView_data = $ReadOnlyArray<{|
  +id: string,
  +price: ?{|
    +$fragmentRefs: PriceMarker_data$ref
  |},
  +coordinates: ?{|
    +lat: ?number,
    +lng: ?number,
  |},
  +$refType: MapView_data$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MapView_data",
  "type": "AllHotelsInterface",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
          "name": "PriceMarker_data",
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
};
// prettier-ignore
(node/*: any*/).hash = '6e37ff96c594a7aa7ce95be2c093c3eb';
module.exports = node;
