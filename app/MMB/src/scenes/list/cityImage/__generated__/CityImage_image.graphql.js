/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ImageBadges$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CityImage_image$ref: FragmentReference;
export type CityImage_image = {|
  +databaseId: ?number,
  +passengerCount: ?number,
  +isPastBooking: ?boolean,
  +destinationImageUrl: ?string,
  +$fragmentRefs: ImageBadges$ref,
  +$refType: CityImage_image$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CityImage_image",
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
      "name": "passengerCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
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
      "name": "ImageBadges",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a77729dd29b8d52a18c166c67a7c9b2a';
module.exports = node;
