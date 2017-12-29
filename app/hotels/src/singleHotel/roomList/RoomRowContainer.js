// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import RoomRow from './RoomRow';

type ContainerProps = {|
  availableRoom: Object,
|};

export default (createFragmentContainer(
  RoomRow,
  graphql`
    fragment RoomRowContainer_availableRoom on HotelRoomAvailability {
      id
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
