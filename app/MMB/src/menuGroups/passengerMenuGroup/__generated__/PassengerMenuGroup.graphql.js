/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PassengerMenuDetail$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerMenuGroup$ref: FragmentReference;
export type PassengerMenuGroup = {|
  +$fragmentRefs: PassengerMenuDetail$ref,
  +$refType: PassengerMenuGroup$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PassengerMenuGroup",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PassengerMenuDetail",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '952a91ed0de96fc895730f8c55252ebc';
module.exports = node;
