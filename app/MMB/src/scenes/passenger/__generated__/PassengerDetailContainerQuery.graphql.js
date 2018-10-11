/**
 * @flow
 * @relayHash 2e8deef1cb50f5c1f364b60254f64c53
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PassengerDetail_booking$ref = any;
export type PassengerDetailContainerQueryVariables = {|
  id: number,
  authToken: string,
|};
export type PassengerDetailContainerQueryResponse = {|
  +singleBooking: ?{|
    +$fragmentRefs: PassengerDetail_booking$ref
  |}
|};
export type PassengerDetailContainerQuery = {|
  variables: PassengerDetailContainerQueryVariables,
  response: PassengerDetailContainerQueryResponse,
|};
*/


/*
query PassengerDetailContainerQuery(
  $id: Int!
  $authToken: String!
) {
  singleBooking(id: $id, authToken: $authToken) {
    __typename
    ...PassengerDetail_booking
    id
  }
}

fragment PassengerDetail_booking on BookingInterface {
  databaseId
  authToken
  contactDetails {
    ...ContactDetails_contactDetails
  }
  passengers {
    databaseId
    ...Passenger_passenger
  }
  ...Baggage
}

fragment ContactDetails_contactDetails on BookingContactDetails {
  phone
  email
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
  visaInformation {
    requiredIn {
      name
      id
    }
    warningIn {
      name
      id
    }
  }
}

fragment Baggage on BookingInterface {
  allowedBaggage {
    ...CabinBags
    ...CheckedBaggage
  }
}

fragment CabinBags on AllowedBaggage {
  cabin {
    ...BagInfo
  }
}

fragment CheckedBaggage on AllowedBaggage {
  checked {
    ...BagInfo
  }
}

fragment BagInfo on Baggage {
  height
  length
  width
  weight
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "authToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "authToken",
    "variableName": "authToken",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "Int!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  v3
],
v5 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "height",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "length",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "width",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "weight",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PassengerDetailContainerQuery",
  "id": null,
  "text": "query PassengerDetailContainerQuery(\n  $id: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $id, authToken: $authToken) {\n    __typename\n    ...PassengerDetail_booking\n    id\n  }\n}\n\nfragment PassengerDetail_booking on BookingInterface {\n  databaseId\n  authToken\n  contactDetails {\n    ...ContactDetails_contactDetails\n  }\n  passengers {\n    databaseId\n    ...Passenger_passenger\n  }\n  ...Baggage\n}\n\nfragment ContactDetails_contactDetails on BookingContactDetails {\n  phone\n  email\n}\n\nfragment Passenger_passenger on Passenger {\n  fullName\n  title\n  birthday\n  nationality\n  travelDocument {\n    idNumber\n  }\n  insuranceType\n  visaInformation {\n    requiredIn {\n      name\n      id\n    }\n    warningIn {\n      name\n      id\n    }\n  }\n}\n\nfragment Baggage on BookingInterface {\n  allowedBaggage {\n    ...CabinBags\n    ...CheckedBaggage\n  }\n}\n\nfragment CabinBags on AllowedBaggage {\n  cabin {\n    ...BagInfo\n  }\n}\n\nfragment CheckedBaggage on AllowedBaggage {\n  checked {\n    ...BagInfo\n  }\n}\n\nfragment BagInfo on Baggage {\n  height\n  length\n  width\n  weight\n}\n",
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
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
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
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "authToken",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contactDetails",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingContactDetails",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phone",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              }
            ]
          },
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "visaInformation",
                "storageKey": null,
                "args": null,
                "concreteType": "Visa",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "requiredIn",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Location",
                    "plural": true,
                    "selections": v4
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "warningIn",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Location",
                    "plural": true,
                    "selections": v4
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allowedBaggage",
            "storageKey": null,
            "args": null,
            "concreteType": "AllowedBaggage",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cabin",
                "storageKey": null,
                "args": null,
                "concreteType": "Baggage",
                "plural": true,
                "selections": v5
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "checked",
                "storageKey": null,
                "args": null,
                "concreteType": "Baggage",
                "plural": true,
                "selections": v5
              }
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4bc32b92fded2b0ac7828192564862b2';
module.exports = node;
