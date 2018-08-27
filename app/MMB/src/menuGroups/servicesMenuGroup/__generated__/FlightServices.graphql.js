/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightServicesMulticity$ref = any;
type FlightServicesOneWay$ref = any;
type FlightServicesReturn$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightServices$ref: FragmentReference;
export type FlightServices = {|
  +__typename: string,
  +isPastBooking: ?boolean,
  +$fragmentRefs: FlightServicesOneWay$ref & FlightServicesReturn$ref & FlightServicesMulticity$ref,
  +$refType: FlightServices$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightServices",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
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
      "kind": "FragmentSpread",
      "name": "FlightServicesOneWay",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FlightServicesReturn",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FlightServicesMulticity",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a6449dc89097f39c97c66905c09bc447';
module.exports = node;
