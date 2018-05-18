/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripCities$ref = any;
type TripTimes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoMulticity$ref: FragmentReference;
export type TripInfoMulticity = {|
  +trips: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TripCities$ref & TripTimes$ref
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
          "name": "TripCities",
          "args": null
        },
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
(node/*: any*/).hash = '2a1d768c8c541e61daf8552d5fc92a6d';
module.exports = node;
