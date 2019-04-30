/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MapViewMarker_markerData$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapView_data$ref: FragmentReference;
declare export opaque type MapView_data$fragmentType: MapView_data$ref;
export type MapView_data = $ReadOnlyArray<{|
  +id: string,
  +coordinates: ?{|
    +lat: ?number,
    +lng: ?number,
  |},
  +$fragmentRefs: MapViewMarker_markerData$ref,
  +$refType: MapView_data$ref,
|}>;
export type MapView_data$data = MapView_data;
export type MapView_data$key = {
  +$data?: MapView_data$data,
  +$fragmentRefs: MapView_data$ref,
};
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
    },
    {
      "kind": "FragmentSpread",
      "name": "MapViewMarker_markerData",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd82822256325efe906aecd07b8cd564c';
module.exports = node;
