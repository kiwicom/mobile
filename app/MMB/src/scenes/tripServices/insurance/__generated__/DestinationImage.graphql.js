/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DestinationImage$ref: FragmentReference;
export type DestinationImage = {|
  +destinationImageUrl: ?string,
  +$refType: DestinationImage$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DestinationImage",
  "type": "BookingInterface",
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
(node/*: any*/).hash = '9b557a759a43f489da10a072a6ca01a7';
module.exports = node;
