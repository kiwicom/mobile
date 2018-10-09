/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CarRentalMenuItem$ref = any;
type HotelMenuItem$ref = any;
type LoungeMenuItem$ref = any;
type ParkingMenuItem$ref = any;
type TransportationMenuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocalServicesMenuGroup$ref: FragmentReference;
export type LocalServicesMenuGroup = {|
  +$fragmentRefs: CarRentalMenuItem$ref & LoungeMenuItem$ref & ParkingMenuItem$ref & HotelMenuItem$ref & TransportationMenuItem$ref,
  +$refType: LocalServicesMenuGroup$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "LocalServicesMenuGroup",
  "type": "WhitelabeledServices",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CarRentalMenuItem",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "LoungeMenuItem",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ParkingMenuItem",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "HotelMenuItem",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TransportationMenuItem",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4666c433fbad7d21cf2f178fd4e02ac1';
module.exports = node;
