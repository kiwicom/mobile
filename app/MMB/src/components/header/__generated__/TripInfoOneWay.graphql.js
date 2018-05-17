/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripTimes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoOneWay$ref: FragmentReference;
export type TripInfoOneWay = {|
  +trip: ?{|
    +$fragmentRefs: TripTimes$ref
  |},
  +$refType: TripInfoOneWay$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfoOneWay",
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
          "name": "TripTimes",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '61ef87a8c05d7edac3b0a21a058e4af3';
module.exports = node;
