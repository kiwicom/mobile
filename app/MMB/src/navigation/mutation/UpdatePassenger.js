// @flow strict

import { graphql, commitMutation } from '@kiwicom/mobile-relay';

import type {
  UpdatePassengerMutationVariables,
  UpdatePassengerMutationResponse,
} from './__generated__/UpdatePassengerMutation.graphql';

const mutation = graphql`
  mutation UpdatePassengerMutation($id: ID!, $passengers: [PassengerInput!]!) {
    updatePassenger(id: $id, passengers: $passengers) {
      success
    }
  }
`;

type Callback = (
  response: UpdatePassengerMutationResponse,
  errors: ?[Error],
) => void;

export default (
  input: UpdatePassengerMutationVariables,
  callback: Callback,
  token: string,
) => {
  commitMutation(
    {
      mutation,
      variables: input,
      updater: store => {
        const payload = store.getRootField('updatePassenger');
        const success = payload === null ? false : payload.getValue('success');

        if (success) {
          const booking = store.get(input.id);
          const passengers = booking.getLinkedRecords('passengers');

          input.passengers.forEach(passenger => {
            const storePassenger = passengers.find(
              storePassenger =>
                storePassenger.getValue('databaseId') === passenger.passengerId,
            );
            const travelDocument = storePassenger.getLinkedRecord(
              'travelDocument',
            );
            travelDocument.setValue(passenger.documentNumber, 'idNumber');
            if (passenger.documentExpiry) {
              travelDocument.setValue(passenger.documentExpiry, 'expiration');
            }
          });
        }
      },
      onCompleted: (response: UpdatePassengerMutationResponse, errors) => {
        callback(response, errors);
      },
    },
    token,
  );
};
