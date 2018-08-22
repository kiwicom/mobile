// @flow strict

import { graphql, commitMutation } from '@kiwicom/mobile-relay';

import type {
  RefundInsuranceMutationVariables,
  RefundInsuranceMutationResponse,
} from './__generated__/RefundInsuranceMutation.graphql';

const mutation = graphql`
  mutation RefundInsuranceMutation(
    $id: ID!
    $passengers: [PassengerInsuranceInput!]!
    $simpleToken: String!
  ) {
    refundInsurance(
      id: $id
      passengers: $passengers
      simpleToken: $simpleToken
    ) {
      passengers {
        databaseId
        insuranceType
      }
    }
  }
`;

type Callback = (
  response: RefundInsuranceMutationResponse,
  errors: ?[Error],
) => void;

export default (
  input: RefundInsuranceMutationVariables,
  relayBookingId: string,
  callback: Callback,
) => {
  commitMutation({
    mutation,
    variables: input,
    onCompleted: (response: RefundInsuranceMutationResponse, errors) => {
      callback(response, errors);
    },
    updater: store => {
      const payload = store.getRootField('refundInsurance');
      if (payload == null) {
        return;
      }
      const changedPassengers = payload.getLinkedRecords('passengers');
      const booking = store.get(relayBookingId);

      const passengers = booking.getLinkedRecords('passengers');

      passengers.forEach(passenger => {
        const changedPassenger = changedPassengers.find(
          p => p.getValue('databaseId') === passenger.getValue('databaseId'),
        );
        const newInsuranceType = changedPassenger.getValue('insuranceType');

        if (newInsuranceType != null) {
          passenger.setValue('insuranceType', newInsuranceType);
        }
      });
    },
  });
};
