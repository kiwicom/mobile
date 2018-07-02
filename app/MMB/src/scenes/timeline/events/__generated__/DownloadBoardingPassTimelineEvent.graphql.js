/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DownloadBoardingPassTimelineEvent$ref: FragmentReference;
export type DownloadBoardingPassTimelineEvent = {|
  +timestamp: ?any,
  +leg: ?{|
    +departure: ?{|
      +airport: ?{|
        +city: ?{|
          +name: ?string
        |}
      |}
    |},
    +arrival: ?{|
      +airport: ?{|
        +city: ?{|
          +name: ?string
        |}
      |}
    |},
    +boardingPass: ?{|
      +flightNumber: ?string,
      +boardingPassUrl: ?string,
    |},
  |},
  +$refType: DownloadBoardingPassTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Fragment",
  "name": "DownloadBoardingPassTimelineEvent",
  "type": "DownloadBoardingPassTimelineEvent",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "timestamp",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "leg",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "departure",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v0
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
              "kind": "ScalarField",
              "alias": null,
              "name": "flightNumber",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "boardingPassUrl",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '8d0197f29f45a274fd8d1f8c5feb8e89';
module.exports = node;
