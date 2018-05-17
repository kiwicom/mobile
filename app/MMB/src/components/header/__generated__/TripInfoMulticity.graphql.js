/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripTimes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoMulticity$ref: FragmentReference;
export type TripInfoMulticity = {|
  +trips: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TripTimes$ref
  |}>,
  +$refType: TripInfoMulticity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfoMulticity",
  "type": "BookingMulticity",
  "metadata": null,
  "argumentDefinitions": [],
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
          "name": "TripTimes",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f8962c116c52c8bf1ed0e28736e4c9b5';
module.exports = node;
