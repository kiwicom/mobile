/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HeaderImage$ref = any;
type StatusBar$ref = any;
type TripInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Header$ref: FragmentReference;
export type Header = {|
  +isPastBooking: ?boolean,
  +$fragmentRefs: StatusBar$ref & TripInfo$ref & HeaderImage$ref,
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
      "name": "HeaderImage",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8027e6433cb178bd7ef28f87f9138446';
module.exports = node;
