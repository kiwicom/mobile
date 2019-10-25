/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapView_hotel$ref: FragmentReference;
declare export opaque type MapView_hotel$fragmentType: MapView_hotel$ref;
export type MapView_hotel = {|
  +coordinates: ?{|
    +lat: ?number,
    +lng: ?number,
  |},
  +$refType: MapView_hotel$ref,
|};
export type MapView_hotel$data = MapView_hotel;
export type MapView_hotel$key = {
  +$data?: MapView_hotel$data,
  +$fragmentRefs: MapView_hotel$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "MapView_hotel",
  "type": "HotelInterface",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node: any).hash = '54d5eb1a9e793be8bced0c546d27f87b';
export default node;
