/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelCityItem_data$ref: FragmentReference;
declare export opaque type HotelCityItem_data$fragmentType: HotelCityItem_data$ref;
export type HotelCityItem_data = {|
  +id: string,
  +name: ?string,
  +location: ?{|
    +lat: ?number,
    +lng: ?number,
  |},
  +$refType: HotelCityItem_data$ref,
|};
export type HotelCityItem_data$data = HotelCityItem_data;
export type HotelCityItem_data$key = {
  +$data?: HotelCityItem_data$data,
  +$fragmentRefs: HotelCityItem_data$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HotelCityItem_data",
  "type": "HotelCity",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
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
(node: any).hash = '58adfae95edaa8dd04f0b47706590a75';
export default node;
