/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AppleWallet$ref = any;
type DownloadButton$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightFromTo$ref: FragmentReference;
export type FlightFromTo = {|
  +id: string,
  +airline: ?{|
    +logoUrl: ?string
  |},
  +departure: ?{|
    +localTime: ?any,
    +airport: ?{|
      +city: ?{|
        +name: ?string
      |}
    |},
  |},
  +arrival: ?{|
    +airport: ?{|
      +city: ?{|
        +name: ?string
      |}
    |}
  |},
  +boardingPass: ?{|
    +$fragmentRefs: DownloadButton$ref & AppleWallet$ref
  |},
  +$refType: FlightFromTo$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
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
};
return {
  "kind": "Fragment",
  "name": "FlightFromTo",
  "type": "Leg",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "airline",
      "storageKey": null,
      "args": null,
      "concreteType": "Airline",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "logoUrl",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "localTime",
          "args": null,
          "storageKey": null
        },
        v0
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        v0
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "boardingPass",
      "storageKey": null,
      "args": null,
      "concreteType": "BoardingPass",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "DownloadButton",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "AppleWallet",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c7701218d5d881a8c7be56c05b35dfae';
module.exports = node;
