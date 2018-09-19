/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Header_hotel$ref: FragmentReference;
export type Header_hotel = {|
  +name: ?string,
  +mainPhoto: ?{|
    +highResUrl: ?string
  |},
  +rating: ?{|
    +stars: ?number,
    +categoryName: ?string,
  |},
  +photos: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +lowResUrl: ?string,
        +highResUrl: ?string,
      |}
    |}>
  |},
  +$refType: Header_hotel$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "highResUrl",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Header_hotel",
  "type": "Hotel",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "mainPhoto",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelPhoto",
      "plural": false,
      "selections": [
        v0
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "rating",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelRating",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "stars",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "categoryName",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "photos",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelPhotoConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "HotelPhotoEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "HotelPhoto",
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "lowResUrl",
                  "args": null,
                  "storageKey": null
                },
                v0
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b63c01773444c38497fc16d4da9a1c49';
module.exports = node;
