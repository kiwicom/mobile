/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type StatusBar$ref = any;
type TripInfo$ref = any;
type TripOverview$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Header$ref: FragmentReference;
export type Header = {|
  +$fragmentRefs: StatusBar$ref & TripInfo$ref & TripOverview$ref,
  +$refType: Header$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Header",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "StatusBar",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripInfo",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripOverview",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9224ea0b97dc6a7b226ab6aac8327416';
module.exports = node;
