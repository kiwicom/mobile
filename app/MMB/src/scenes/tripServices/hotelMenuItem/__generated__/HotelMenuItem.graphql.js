/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type LocationItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelMenuItem$ref: FragmentReference;
export type HotelMenuItem = {|
  +hotel: ?{|
    +relevantLocations: ?$ReadOnlyArray<?{|
      +location: ?{|
        +id: string
      |},
      +hotelCity: ?{|
        +id: string,
        +name: ?string,
      |},
      +$fragmentRefs: LocationItem$ref,
    |}>
  |},
  +$refType: HotelMenuItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "HotelMenuItem",
  "type": "WhitelabeledServices",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "hotel",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelService",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "relevantLocations",
          "storageKey": null,
          "args": null,
          "concreteType": "HotelServiceRelevantLocation",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "LocationItem",
              "args": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "location",
              "storageKey": null,
              "args": null,
              "concreteType": "Location",
              "plural": false,
              "selections": [
                v0
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "hotelCity",
              "storageKey": null,
              "args": null,
              "concreteType": "HotelCity",
              "plural": false,
              "selections": [
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                }
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
(node/*: any*/).hash = 'c5834d26457c6a8bd34d8b06ce5c7677';
module.exports = node;
