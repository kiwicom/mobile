// @flow

import { createFragmentContainer, graphql } from 'react-relay';

import AssetsDownloader from '../../services/assets/AssetsDownloader';

import type { AllBookingsAssetsDownloader } from './__generated__/AllBookingsAssetsDownloader.graphql';

type Props = {|
  data: AllBookingsAssetsDownloader,
|};

/**
 * This is not visual component. It just downloads all necessary assets for
 * the Booking for later offline usage.
 */
function AllBookingsAssetsDownloaderWithoutData({
  data: { ticketUrl, invoiceUrl },
}: Props) {
  AssetsDownloader.download(ticketUrl);
  AssetsDownloader.download(invoiceUrl);

  // it's not visual component
  return null;
}

export default createFragmentContainer(
  AllBookingsAssetsDownloaderWithoutData,
  graphql`
    fragment AllBookingsAssetsDownloader on BookingAssets {
      ticketUrl
      invoiceUrl
    }
  `,
);
