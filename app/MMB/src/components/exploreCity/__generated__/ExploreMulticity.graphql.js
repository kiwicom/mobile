/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreText$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreMulticity$ref: FragmentReference;
export type ExploreMulticity = {|
  +trips?: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +time: ?any
    |},
    +$fragmentRefs: ExploreText$ref,
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
(node/*: any*/).hash = 'd7dea249340e613a65938265871952f3';
module.exports = node;
