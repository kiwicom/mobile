/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FastTrackModal_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FastTrackBannerContent_data$ref: FragmentReference;
declare export opaque type FastTrackBannerContent_data$fragmentType: FastTrackBannerContent_data$ref;
export type FastTrackBannerContent_data = {|
  +fastTrack: ?$ReadOnlyArray<?{|
    +attachments: ?$ReadOnlyArray<?{|
      +$fragmentRefs: FastTrackModal_data$ref
    |}>
  |}>,
  +$refType: FastTrackBannerContent_data$ref,
|};
export type FastTrackBannerContent_data$data = FastTrackBannerContent_data;
export type FastTrackBannerContent_data$key = {
  +$data?: FastTrackBannerContent_data$data,
  +$fragmentRefs: FastTrackBannerContent_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FastTrackBannerContent_data",
  "type": "Ancillaries",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "fastTrack",
      "storageKey": null,
      "args": null,
      "concreteType": "AncillaryPerSegmentPerPassenger",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "attachments",
          "storageKey": null,
          "args": null,
          "concreteType": "AncillaryDocument",
          "plural": true,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "FastTrackModal_data",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a0db8beebefecc1c94474722b08e160a';
module.exports = node;
