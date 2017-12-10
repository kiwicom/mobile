// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import type { RouteStop } from './__generated__/RouteStop.graphql';

import Airport from './Airport';

type Props = {|
  data: RouteStop,
|};

export const RouteStopWithoutData = ({ data }: Props) => {
  return <Airport data={data.airport} />;
};

export default createFragmentContainer(
  RouteStopWithoutData,
  graphql`
    fragment RouteStop on RouteStop {
      airport {
        ...Airport
      }
    }
  `,
);
