// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import RoomRow from './RoomRow';

type ContainerProps = {|
  availableRoom: Object,
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
|};

export default (createFragmentContainer(
  RoomRow,
  graphql`
    fragment RoomRowContainer_availableRoom on HotelRoomAvailability {
      room {
        description {
          title
          text
        }
        type
        bedding {
          type
          amount
        }
        photos {
          edges {
            node {
              thumbnailUrl
            }
          }
        }
      }
      minimalPrice {
        amount
        currency
      }
      incrementalPrice {
        amount
        currency
      }
    }
  `,
): React.ComponentType<ContainerProps>);
