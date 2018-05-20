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
declare export opaque type TripInfoOneWay$ref: FragmentReference;
export type TripInfoOneWay = {|
  +trip: ?{|
    +$fragmentRefs: TripCities$ref & TripTimes$ref
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
(node/*: any*/).hash = '62cca0e13428f43e68126f6acdd67ae6';
module.exports = node;
