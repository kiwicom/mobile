/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExpiryDatePicker$ref: FragmentReference;
export type ExpiryDatePicker = {|
  +legs: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +time: ?any
    |}
  |}>,
  +$refType: ExpiryDatePicker$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExpiryDatePicker",
  "type": "Trip",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "legs",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd50285958ce6e93af7e4f1c618a1d18d';
module.exports = node;
