// @flow strict

import * as React from 'react';
import { Logger } from '@kiwicom/mobile-shared';
import { graphql } from '@kiwicom/mobile-relay';

import { HotelsContext, type HotelsContextState } from '../../HotelsContext';
import PaymentWebView from './PaymentWebView';
import type { Stay22PaymentScreenQueryResponse } from './__generated__/Stay22PaymentScreenQuery.graphql';
import PaymentQueryRenderer from './PaymentQueryRenderer';

type Props = {|
  +roomConfig: $ReadOnlyArray<{|
    +roomId: string,
    +count: number,
  |}>,
|};

const renderInner = (props: Stay22PaymentScreenQueryResponse) => (
  <PaymentWebView url={props.hotelPaymentUrls?.stay22PaymentUrl} />
);

function Stay22PaymentScreen(props: Props) {
  const { paymentLink }: HotelsContextState = React.useContext(HotelsContext);

  React.useEffect(() => {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_PAYMENT,
      Logger.Provider.ANCILLARY_PROVIDER_STAY22,
    );
  }, []);

  return (
    <PaymentQueryRenderer
      render={renderInner}
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
        paymentLink,
        roomConfig: props.roomConfig,
      }}
    />
  );
}

export default Stay22PaymentScreen;
