// @flow strict

import * as React from 'react';
import { Logger } from '@kiwicom/mobile-shared';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import { withHotelsContext } from '../../HotelsContext';
import PaymentWebView from './PaymentWebView';
import type { Stay22PaymentScreenQueryResponse } from './__generated__/Stay22PaymentScreenQuery.graphql';

type Props = {|
  +paymentLink: ?string,
  +roomConfig: $ReadOnlyArray<{|
    +roomId: string,
    +count: number,
  |}>,
|};

class Stay22PaymentScreen extends React.Component<Props> {
  componentDidMount() {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_PAYMENT,
      Logger.Provider.ANCILLARY_PROVIDER_STAY22,
    );
  }

  renderInner = (props: Stay22PaymentScreenQueryResponse) => (
    <PaymentWebView url={props.hotelPaymentUrls?.stay22PaymentUrl} />
  );

  render() {
    return (
      <PublicApiRenderer
        render={this.renderInner}
        query={graphql`
          query Stay22PaymentScreenQuery(
            $paymentLink: String!
            $roomConfig: [RoomConfigInput]
          ) {
            hotelPaymentUrls(roomConfig: $roomConfig) {
              stay22PaymentUrl(paymentLink: $paymentLink)
            }
          }
        `}
        variables={{
          paymentLink: this.props.paymentLink,
          roomConfig: this.props.roomConfig,
        }}
      />
    );
  }
}
export default withHotelsContext(state => ({
  paymentLink: state.paymentLink,
}))(Stay22PaymentScreen);
