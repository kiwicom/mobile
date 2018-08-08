/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreAirportGroup$ref = any;
type ExploreDestinationsGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreBookingMulticity$ref: FragmentReference;
export type ExploreBookingMulticity = {|
  +trips: ?$ReadOnlyArray<?{|
    +legs: ?$ReadOnlyArray<?{|
      +$fragmentRefs: ExploreAirportGroup$ref
    |}>,
    +$fragmentRefs: ExploreDestinationsGroup$ref,
  |}>,
  +$refType: ExploreBookingMulticity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExploreBookingMulticity",
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
          "name": "ExploreDestinationsGroup",
          "args": null
        },
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
              "kind": "FragmentSpread",
              "name": "ExploreAirportGroup",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b5be13955481c843dad7f2cc3a0d496e';
module.exports = node;
