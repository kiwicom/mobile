/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreVariant_trip$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreOneWay$ref: FragmentReference;
export type ExploreOneWay = {|
  +trip?: ?{|
    +$fragmentRefs: ExploreVariant_trip$ref
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
              "name": "ExploreVariant_trip",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c66286a9f946617d86ecc2ab034b1480';
module.exports = node;
