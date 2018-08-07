/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreVariant$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreMulticity$ref: FragmentReference;
export type ExploreMulticity = {|
  +trips?: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ExploreVariant$ref
  |}>,
  +$refType: ExploreMulticity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExploreMulticity",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trips",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": true,
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
(node/*: any*/).hash = 'dad2220d3a069710291c80e666b6ce02';
module.exports = node;
