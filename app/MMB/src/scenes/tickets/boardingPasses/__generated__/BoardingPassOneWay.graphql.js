/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightSegments$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardingPassOneWay$ref: FragmentReference;
export type BoardingPassOneWay = {|
  +trip: ?{|
    +$fragmentRefs: FlightSegments$ref
  |},
  +$refType: BoardingPassOneWay$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BoardingPassOneWay",
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
          "name": "FlightSegments",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a7d83984059e0e34b00a816cde0dd317';
module.exports = node;
