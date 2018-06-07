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
  +isPastBooking: ?boolean,
  +$fragmentRefs: StatusBar$ref & TripInfo$ref & TripOverview$ref,
  +$refType: Header$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Header",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    },
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
(node/*: any*/).hash = '5ca0cba5575549b024a72f8ac27bf242';
module.exports = node;
