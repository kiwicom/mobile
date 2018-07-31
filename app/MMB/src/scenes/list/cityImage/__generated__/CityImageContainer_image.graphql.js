/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ImageBadges$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CityImageContainer_image$ref: FragmentReference;
export type CityImageContainer_image = {|
  +id: string,
  +databaseId: ?number,
  +passengerCount: ?number,
  +isPastBooking: ?boolean,
  +destinationImageUrl: ?string,
  +authToken: ?string,
  +$fragmentRefs: ImageBadges$ref,
  +$refType: CityImageContainer_image$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CityImageContainer_image",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "alias": null,
      "name": "authToken",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ImageBadges",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b4d1369d23dc497fe093030fa4db1bc0';
module.exports = node;
