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
  +time: ?any,
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "time",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '542ab2ef2f89ee85e4e0f46025b5e5cb';
module.exports = node;
