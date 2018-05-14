/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type DateAndPassengerCount_departure$ref = any;
type FromToRow_departure$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CityImage_departure$ref: FragmentReference;
export type CityImage_departure = {|
  +$fragmentRefs: DateAndPassengerCount_departure$ref & FromToRow_departure$ref,
  +$refType: CityImage_departure$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CityImage_departure",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "DateAndPassengerCount_departure",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FromToRow_departure",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2bbde91b3f316e923ace6090bc41002d';
module.exports = node;
