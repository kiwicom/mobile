// @flow

import * as React from 'react';
import { Share, Platform } from 'react-native';
import { DateFormatter, GetDeviceLocale } from '@kiwicom/mobile-localization';

import BookingDetailContext from '../context/BookingDetailContext';
import ShareButton from '../components/ShareButton';

type PropsWithContext = {|
  +arrivalCityId: string,
  +arrivalTime: Date,
|};

class DetailShareButton extends React.Component<PropsWithContext> {
  onPress = () => {
    const lang = GetDeviceLocale().split('-')[0] || 'en';
    const message = `https://kiwi.com/share?date=${DateFormatter(
      this.props.arrivalTime,
    ).formatForMachine()}&city_id=${
      this.props.arrivalCityId
    }&source=manageMyBooking&lang=${lang}&type=flight`;

    Platform.select({
      ios: Share.share({ url: message }),
      android: Share.share({ message }),
    });
  };

  render = () => <ShareButton onPress={this.onPress} />;
}

export default function HeaderShareButtonWithContext() {
  return (
    <BookingDetailContext.Consumer>
      {({ arrivalCityId, arrivalTime }) => (
        <DetailShareButton
          arrivalCityId={arrivalCityId}
          arrivalTime={arrivalTime}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
