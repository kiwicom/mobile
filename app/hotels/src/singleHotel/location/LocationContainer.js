// @flow

import { createFragmentContainer, graphql } from 'react-relay';
import Location from './Location';

export default createFragmentContainer(
  Location,
  graphql`
    fragment LocationContainer_hotel on Hotel {
      address {
        street
        city
      }
      coordinates {
        lat
        lng
      }
    }
  `,
);
