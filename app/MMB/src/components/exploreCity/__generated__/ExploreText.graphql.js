/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreMenuGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreText$ref: FragmentReference;
export type ExploreText = {|
  +departure: ?{|
    +time: ?any
  |},
  +arrival: ?{|
    +airport: ?{|
      +city: ?{|
        +name: ?string
      |},
      +$fragmentRefs: ExploreMenuGroup$ref,
    |}
  |},
  +$refType: ExploreText$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExploreText",
  "type": "Trip",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "time",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "airport",
          "storageKey": null,
          "args": null,
          "concreteType": "Location",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "ExploreMenuGroup",
              "args": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "city",
              "storageKey": null,
              "args": null,
              "concreteType": "LocationArea",
              "plural": false,
              "selections": [
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
// prettier-ignore
(node/*: any*/).hash = '876aeb47c6ffb4c886ebada67d270c1c';
module.exports = node;
