/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingConfirmed$ref: FragmentReference;
export type BookingConfirmed = {|
  +time: ?any,
  +airport: ?{|
    +city: ?{|
      +name: ?string
    |}
  |},
  +$refType: BookingConfirmed$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingConfirmed",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "time",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "airport",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "city",
          "storageKey": null,
          "args": null,
          "concreteType": "LocationArea",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e28ac9616fc5c1f3da8f6b487adcaf42';
module.exports = node;
