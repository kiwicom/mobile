/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreVariant$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreOneWay$ref: FragmentReference;
export type ExploreOneWay = {|
  +trip?: ?{|
    +$fragmentRefs: ExploreVariant$ref
  |},
  +$refType: ExploreOneWay$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExploreOneWay",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingOneWay",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trip",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "ExploreVariant",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '988aa4e793ca89b57eb3cb457bf98764';
module.exports = node;
