/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HeaderImage$ref: FragmentReference;
export type HeaderImage = {|
  +destinationImageUrl: ?string,
  +$refType: HeaderImage$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HeaderImage",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "destinationImageUrl",
      "args": [
        {
          "kind": "Literal",
          "name": "dimensions",
          "value": "_375x165",
          "type": "BookingDestinationImageDimensions"
        }
      ],
      "storageKey": "destinationImageUrl(dimensions:\"_375x165\")"
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd6500bf34da54b1db99d93a6fb23de9f';
module.exports = node;
