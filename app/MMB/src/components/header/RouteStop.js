// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

function RouteStop(props) {
  return <Translation passThrough={JSON.stringify(props.data)} />;
}

export default createFragmentContainer(
  RouteStop,
  graphql`
    fragment RouteStop on RouteStop {
      airport {
        city {
          name
        }
      }
      localTime
    }
  `,
);
