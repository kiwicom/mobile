/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Header_hotel$ref: FragmentReference;
declare export opaque type Header_hotel$fragmentType: Header_hotel$ref;
export type Header_hotel = {|
  +name: ?string,
  +mainPhoto: ?{|
    +highResUrl: ?string
  |},
  +rating: ?{|
    +stars: ?number
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
export type Header_hotel$data = Header_hotel;
export type Header_hotel$key = {
  +$data?: Header_hotel$data,
  +$fragmentRefs: Header_hotel$ref,
  ...
};


const node: ReaderFragment = (function(){
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
  "type": "HotelInterface",
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
        (v0/*: any*/)
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
                (v0/*: any*/)
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
(node: any).hash = '3780aeaa38467bedc5db18e37f6ebec0';
export default node;
