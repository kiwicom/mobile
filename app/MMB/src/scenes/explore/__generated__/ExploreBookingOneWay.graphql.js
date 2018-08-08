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
declare export opaque type ExploreBookingOneWay$ref: FragmentReference;
export type ExploreBookingOneWay = {|
  +trip: ?{|
    +legs: ?$ReadOnlyArray<?{|
      +$fragmentRefs: ExploreAirportGroup$ref
    |}>,
    +$fragmentRefs: ExploreDestinationsGroup$ref,
  |},
  +$refType: ExploreBookingOneWay$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExploreBookingOneWay",
  "type": "BookingOneWay",
  "metadata": null,
  "argumentDefinitions": [],
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
(node/*: any*/).hash = '8e1aa653f2de94606208c5c5a8f03aa7';
module.exports = node;
