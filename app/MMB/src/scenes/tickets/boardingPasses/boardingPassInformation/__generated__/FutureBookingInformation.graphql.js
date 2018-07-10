/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FutureBookingInformation$ref: FragmentReference;
export type FutureBookingInformation = {|
  +boardingPassUrl: ?string,
  +$refType: FutureBookingInformation$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FutureBookingInformation",
  "type": "BoardingPass",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "boardingPassUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fbdbe16719fe589bc613056daeff751b';
module.exports = node;
