/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreText$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreOneWay$ref: FragmentReference;
export type ExploreOneWay = {|
  +trip?: ?{|
    +$fragmentRefs: ExploreText$ref
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
              "name": "ExploreText",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cd08094af4e0b615905d0d22bf4bd02a';
module.exports = node;
