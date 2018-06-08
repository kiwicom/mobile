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
  +id: string,
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
      "name": "id",
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
(node/*: any*/).hash = '0eacf2b01a28f9c1a0794089c3f61868';
module.exports = node;
