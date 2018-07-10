/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FutureBookingInformation$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardingPassInformation$ref: FragmentReference;
export type BoardingPassInformation = {|
  +availableAt: ?any,
  +boardingPassUrl: ?string,
  +$fragmentRefs: FutureBookingInformation$ref,
  +$refType: BoardingPassInformation$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BoardingPassInformation",
  "type": "BoardingPass",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "availableAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "boardingPassUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FutureBookingInformation",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd49f7627c24455fa08c3d4115e0a45b9';
module.exports = node;
