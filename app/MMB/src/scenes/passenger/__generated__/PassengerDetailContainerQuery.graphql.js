/**
 * @flow
 * @relayHash 59e87791e4154fdfaed50e6b98c4ed85
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PassengerDetail_booking$ref = any;
export type PassengerDetailContainerQueryVariables = {|
  id: string
|};
export type PassengerDetailContainerQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: PassengerDetail_booking$ref
  |}
|};
*/


/*
query PassengerDetailContainerQuery(
  $id: ID!
) {
  booking(id: $id) {
    ...PassengerDetail_booking
    id
  }
}

fragment PassengerDetail_booking on Booking {
  databaseId
  passengers {
    databaseId
    ...Passenger_passenger
  }
}

fragment Passenger_passenger on Passenger {
  fullName
  title
  birthday
  nationality
  travelDocument {
    idNumber
  }
  insuranceType
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PassengerDetailContainerQuery",
  "id": null,
  "text": "query PassengerDetailContainerQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    ...PassengerDetail_booking\n    id\n  }\n}\n\nfragment PassengerDetail_booking on Booking {\n  databaseId\n  passengers {\n    databaseId\n    ...Passenger_passenger\n  }\n}\n\nfragment Passenger_passenger on Passenger {\n  fullName\n  title\n  birthday\n  nationality\n  travelDocument {\n    idNumber\n  }\n  insuranceType\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PassengerDetailContainerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PassengerDetail_booking",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PassengerDetailContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "passengers",
            "storageKey": null,
            "args": null,
            "concreteType": "Passenger",
            "plural": true,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fullName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "birthday",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "nationality",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "travelDocument",
                "storageKey": null,
                "args": null,
                "concreteType": "TravelDocument",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "idNumber",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "insuranceType",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '574b3bd0092a89e22989a905a25e789f';
module.exports = node;
