/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PriceMarker_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapViewMarker_markerData$ref: FragmentReference;
declare export opaque type MapViewMarker_markerData$fragmentType: MapViewMarker_markerData$ref;
export type MapViewMarker_markerData = {|
  +id: string,
  +price: ?{|
    +$fragmentRefs: PriceMarker_data$ref
  |},
  +coordinates: ?{|
    +lat: ?number,
    +lng: ?number,
  |},
  +$refType: MapViewMarker_markerData$ref,
|};
export type MapViewMarker_markerData$data = MapViewMarker_markerData;
export type MapViewMarker_markerData$key = {
  +$data?: MapViewMarker_markerData$data,
  +$fragmentRefs: MapViewMarker_markerData$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MapViewMarker_markerData",
  "type": "AllHotelsInterface",
  "metadata": null,
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
      "alias": "price",
      "name": "money",
      "storageKey": null,
      "args": null,
      "concreteType": "Money",
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
(node/*: any*/).hash = 'fa1a0381d140c835da54b596e4c8b624';
module.exports = node;
