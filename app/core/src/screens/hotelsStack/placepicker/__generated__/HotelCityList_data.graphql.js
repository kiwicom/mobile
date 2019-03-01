/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotelCityItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelCityList_data$ref: FragmentReference;
export type HotelCityList_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: HotelCityItem_data$ref,
    |}
  |}>,
  +$refType: HotelCityList_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HotelCityList_data",
  "type": "HotelCityConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelCityEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
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
              "kind": "FragmentSpread",
              "name": "HotelCityItem_data",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '706aa63e4215c06387f1ed7388a7075b';
module.exports = node;
