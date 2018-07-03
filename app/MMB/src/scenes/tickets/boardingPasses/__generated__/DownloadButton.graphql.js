/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DownloadButton$ref: FragmentReference;
export type DownloadButton = {|
  +boardingPassUrl: ?string,
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
      "name": "boardingPassUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4b65d0690c4d144cf3411c0c9e5b21b7';
module.exports = node;
