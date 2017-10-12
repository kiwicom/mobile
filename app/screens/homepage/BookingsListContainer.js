// @flow

import { createFragmentContainer, graphql } from 'react-relay';

import BookingsList from './BookingsList';

export default createFragmentContainer(
  BookingsList,
  graphql`
    fragment BookingsListContainer_bookings on RootQuery {
      allBookings {
        edges {
          node {
            id
            departure {
              airport {
                locationId
              }
            }
            arrival {
              airport {
                locationId
              }
            }
          }
        }
      }
    }
  `,
);
