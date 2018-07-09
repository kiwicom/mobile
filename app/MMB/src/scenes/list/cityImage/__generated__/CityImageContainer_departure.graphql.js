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
declare export opaque type CityImageContainer_departure$ref: FragmentReference;
export type CityImageContainer_departure = {|
  +time: ?any,
  +$fragmentRefs: DateAndPassengerCount_departure$ref & FromToRow_departure$ref,
  +$refType: CityImageContainer_departure$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CityImageContainer_departure",
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
(node/*: any*/).hash = '7037fb5ef11a413aeb57889de0c0a429';
module.exports = node;
