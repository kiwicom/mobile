// @flow strict

import * as React from 'react';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';

import FastTrackBannerContent from '../components/FastTrackBannerContent';
import type { FastTrackBannerQueryResponse as BookingAncillaries } from './__generated__/FastTrackBannerQuery.graphql';

type Props = {|
  +bookingId: number,
  +kwAuthToken: string,
|};

const query = graphql`
  query FastTrackBannerQuery($bookingId: Int!) {
    bookingAncillaries(bookingId: $bookingId, attachmentsFor: [FAST_TRACK]) {
      ...FastTrackBannerContent_data
    }
  }
`;

class FastTrackBanner extends React.Component<Props> {
  renderFastTrackBannerContent = (props: BookingAncillaries) => {
    return <FastTrackBannerContent data={props.bookingAncillaries} />;
  };

  render() {
    return (
      <PrivateApiRenderer
        query={query}
        variables={{
          bookingId: this.props.bookingId,
        }}
        authHeaderKey={'KW-Auth-Token'}
        render={this.renderFastTrackBannerContent}
      />
    );
  }
}

export default FastTrackBanner;
