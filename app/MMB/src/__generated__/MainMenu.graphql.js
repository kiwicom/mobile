/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainMenu$ref: FragmentReference;
export type MainMenu = {|
  +$fragmentRefs: Header$ref,
  +$refType: MainMenu$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MainMenu",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4e7432166de1f7b68b4c5a516821dd95';
module.exports = node;
