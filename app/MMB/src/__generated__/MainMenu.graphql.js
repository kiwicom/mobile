/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header$ref = any;
type PassengerMenuGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainMenu$ref: FragmentReference;
export type MainMenu = {|
  +$fragmentRefs: Header$ref & PassengerMenuGroup$ref,
  +$refType: MainMenu$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MainMenu",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PassengerMenuGroup",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2585c83d4a9055f2c3939b4c22f33ee8';
module.exports = node;
