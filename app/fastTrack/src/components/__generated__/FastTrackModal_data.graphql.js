/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FastTrackModal_data$ref: FragmentReference;
declare export opaque type FastTrackModal_data$fragmentType: FastTrackModal_data$ref;
export type FastTrackModal_data = {|
  +url: ?string,
  +$refType: FastTrackModal_data$ref,
|};
export type FastTrackModal_data$data = FastTrackModal_data;
export type FastTrackModal_data$key = {
  +$data?: FastTrackModal_data$data,
  +$fragmentRefs: FastTrackModal_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FastTrackModal_data",
  "type": "AncillaryDocument",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ed6bce65bc9087fd1d9d91c37d82efe2';
module.exports = node;
