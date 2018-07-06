/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header$ref = any;
type MissingInformation$ref = any;
type PassengerMenuGroup$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainMenu$ref: FragmentReference;
export type MainMenu = {|
  +$fragmentRefs: Header$ref & PassengerMenuGroup$ref & MissingInformation$ref,
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
    },
    {
      "kind": "FragmentSpread",
      "name": "MissingInformation",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '001decf0a45eee59ebaa10c71a870206';
module.exports = node;
