// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import BookingDetailContext from '../../context/BookingDetailContext';
import GetValidExploreType from './GetValidExploreType';
import type { ExploreQuery as ExploreQueryType } from './__generated__/ExploreQuery.graphql';

type Props = {||};

export default class Explore extends React.Component<Props> {
  renderInner = (rendererProps: ExploreQueryType) => {
    const data = rendererProps.singleBooking;
    return <GetValidExploreType data={data} />;
  };

  render() {
    return (
      <BookingDetailContext.Consumer>
        {({ bookingId, authToken }) => {
          return (
            <PublicApiRenderer
              render={this.renderInner}
              query={graphql`
                query ExploreQuery($id: Int!, $authToken: String!) {
                  singleBooking(id: $id, authToken: $authToken) {
                    __typename
                    ... on BookingOneWay {
                      ...ExploreBookingOneWay
                    }
                    ... on BookingMulticity {
                      ...ExploreBookingMulticity
                    }
                    ... on BookingReturn {
                      ...ExploreBookingReturn
                    }
                  }
                }
              `}
              variables={{
                id: bookingId,
                authToken,
              }}
            />
          );
        }}
      </BookingDetailContext.Consumer>
    );
  }
}
