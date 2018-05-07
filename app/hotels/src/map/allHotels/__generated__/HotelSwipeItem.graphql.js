/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelDetailPreview_availability$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelSwipeItem$ref: FragmentReference;
export type HotelSwipeItem = {|
  +hotel: ?{|
    +id: string
  |},
  +$fragmentRefs: HotelDetailPreview_availability$ref,
  +$refType: HotelSwipeItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelSwipeItem",
  "type": "HotelAvailability",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelDetailPreview_availability",
      "args": null
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
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9ed0e348c941d43b7e2e85c3d290460c';
module.exports = node;
