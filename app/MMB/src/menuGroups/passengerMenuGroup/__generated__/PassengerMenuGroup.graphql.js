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
  "type": "Booking",
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
(node/*: any*/).hash = '9b8e662f51415385f59647023bea3454';
module.exports = node;
