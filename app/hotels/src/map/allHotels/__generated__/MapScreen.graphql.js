/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelSwipeList$ref = any;
type MapView$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type MapScreen$ref: FragmentReference;
export type MapScreen = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
    |},
    +$fragmentRefs: (MapView$ref & HotelSwipeList$ref),
  |}>,
  +$refType: MapScreen$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MapScreen",
  "type": "HotelAvailabilityConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelAvailabilityEdge",
      "plural": true,
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
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "MapView",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "HotelSwipeList",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '9b4ab0921dbdfea4c94e65439a617823';
module.exports = node;
