/**
 * @flow
 * @relayHash 1ef8f14223e030acce973feb500b6d4d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FastTrackBannerContent_data$ref = any;
export type FastTrackBannerQueryVariables = {|
  bookingId: number
|};
export type FastTrackBannerQueryResponse = {|
  +bookingAncillaries: ?{|
    +$fragmentRefs: FastTrackBannerContent_data$ref
  |}
|};
export type FastTrackBannerQuery = {|
  variables: FastTrackBannerQueryVariables,
  response: FastTrackBannerQueryResponse,
|};
*/


/*
query FastTrackBannerQuery(
  $bookingId: Int!
) {
  bookingAncillaries(bookingId: $bookingId, attachmentsFor: [FAST_TRACK]) {
    ...FastTrackBannerContent_data
  }
}

fragment FastTrackBannerContent_data on Ancillaries {
  fastTrack {
    attachments {
      ...FastTrackModal_data
    }
  }
}

fragment FastTrackModal_data on AncillaryDocument {
  url
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookingId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "attachmentsFor",
    "value": [
      "FAST_TRACK"
    ],
    "type": "[AttachmentsFor!]"
  },
  {
    "kind": "Variable",
    "name": "bookingId",
    "variableName": "bookingId",
    "type": "Int!"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FastTrackBannerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingAncillaries",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Ancillaries",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FastTrackBannerContent_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FastTrackBannerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingAncillaries",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Ancillaries",
        "plural": false,
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FastTrackBannerQuery",
    "id": null,
    "text": "query FastTrackBannerQuery(\n  $bookingId: Int!\n) {\n  bookingAncillaries(bookingId: $bookingId, attachmentsFor: [FAST_TRACK]) {\n    ...FastTrackBannerContent_data\n  }\n}\n\nfragment FastTrackBannerContent_data on Ancillaries {\n  fastTrack {\n    attachments {\n      ...FastTrackModal_data\n    }\n  }\n}\n\nfragment FastTrackModal_data on AncillaryDocument {\n  url\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f5782a610c1cec7899351608c70da717';
module.exports = node;
