// @flow

import { createFragmentContainer, graphql } from 'react-relay';

import Description from './Description';

export default createFragmentContainer(
  Description,
  graphql`
    fragment DescriptionContainer_hotel on Hotel {
      facilities {
        edges {
          node {
            name
          }
        }
      }
    }
  `,
);
