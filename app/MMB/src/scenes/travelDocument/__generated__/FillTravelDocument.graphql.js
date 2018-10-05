/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PassengerTravelDocumentMenuGroup$ref = any;
type TripInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FillTravelDocument$ref: FragmentReference;
export type FillTravelDocument = {|
  +databaseId: ?number,
  +authToken: ?string,
  +destinationImageUrl: ?string,
  +$fragmentRefs: TripInfo$ref & PassengerTravelDocumentMenuGroup$ref,
  +$refType: FillTravelDocument$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FillTravelDocument",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "authToken",
      "args": null,
      "storageKey": null
    },
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
    },
    {
      "kind": "FragmentSpread",
      "name": "TripInfo",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PassengerTravelDocumentMenuGroup",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '82cd118a9f081bfe81ebbd353383dcf3';
module.exports = node;
