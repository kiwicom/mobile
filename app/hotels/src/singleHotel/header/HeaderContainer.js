// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import Header from './Header';
import type { Image } from '../../gallery/GalleryGrid';

type ContainerProps = {
  openGallery: (hotelName: string, images: Image[]) => void,
};

export default (createFragmentContainer(
  Header,
  graphql`
    fragment HeaderContainer_hotel on Hotel {
      name
      mainPhoto {
        highResUrl
      }
      rating {
        stars
        categoryName
      }
      review {
        score
        description
      }
      photos {
        edges {
          node {
            id
            lowResUrl
            highResUrl
          }
        }
      }
    }
  `,
): React.ComponentType<ContainerProps>);
