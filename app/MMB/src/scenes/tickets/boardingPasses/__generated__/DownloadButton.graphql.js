/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BoardingPassInformation$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DownloadButton$ref: FragmentReference;
export type DownloadButton = {|
  +flightNumber: ?string,
  +boardingPassUrl: ?string,
  +$fragmentRefs: BoardingPassInformation$ref,
  +$refType: DownloadButton$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DownloadButton",
  "type": "BoardingPass",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "flightNumber",
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
      "name": "BoardingPassInformation",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '377dd4859b8f63343575db0175eb213c';
module.exports = node;
