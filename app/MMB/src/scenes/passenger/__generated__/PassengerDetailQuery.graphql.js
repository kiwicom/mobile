/**
 * @flow
 * @relayHash df051649d7fccb87a3b81637cca00b85
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PassengerDetail_booking$ref = any;
export type PassengerDetailQueryVariables = {|
  id: string
|};
export type PassengerDetailQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: PassengerDetail_booking$ref
  |}
|};
*/


/*
query PassengerDetailQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on BookingInterface {
      ...PassengerDetail_booking
    }
    id
  }
}

fragment PassengerDetail_booking on BookingInterface {
  databaseId
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
  "name": "PassengerDetailQuery",
  "id": null,
  "text": "query PassengerDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on BookingInterface {\n      ...PassengerDetail_booking\n    }\n    id\n  }\n}\n\nfragment PassengerDetail_booking on BookingInterface {\n  databaseId\n  contactDetails {\n    ...ContactDetails_contactDetails\n  }\n  passengers {\n    databaseId\n    ...Passenger_passenger\n  }\n  ...Baggage\n}\n\nfragment ContactDetails_contactDetails on BookingContactDetails {\n  phone\n  email\n}\n\nfragment Passenger_passenger on Passenger {\n  fullName\n  title\n  birthday\n  nationality\n  travelDocument {\n    idNumber\n  }\n  insuranceType\n  visaInformation {\n    requiredIn {\n      name\n      id\n    }\n    warningIn {\n      name\n      id\n    }\n  }\n}\n\nfragment Baggage on BookingInterface {\n  allowedBaggage {\n    ...CabinBags\n    ...CheckedBaggage\n  }\n}\n\nfragment CabinBags on AllowedBaggage {\n  cabin {\n    ...BagInfo\n  }\n}\n\nfragment CheckedBaggage on AllowedBaggage {\n  checked {\n    ...BagInfo\n  }\n}\n\nfragment BagInfo on Baggage {\n  height\n  length\n  width\n  weight\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PassengerDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
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
    "name": "PassengerDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
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
(node/*: any*/).hash = 'd6bb66329916b953e2c0214427ab59c1';
module.exports = node;
