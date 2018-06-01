// @flow

import * as React from 'react';
import { Share, Platform } from 'react-native';
import {
  TextIcon,
  HeaderRightButton,
  Color,
  StyleSheet,
} from '@kiwicom/mobile-shared';
import { DateFormatter, GetDeviceLocale } from '@kiwicom/mobile-localization';

import BookingDetailContext from '../context/BookingDetailContext';

type PropsWithContext = {|
  +arrivalCityId: string,
  +arrivalTime: Date,
|};

class HeaderShareButton extends React.Component<PropsWithContext> {
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

  render = () => (
    <HeaderRightButton onPress={this.onPress}>
      {Platform.select({
        ios: <TextIcon code="&#xe083;" style={styles.icon} />,
        android: <TextIcon code="&#xe068;" style={styles.icon} />,
      })}
    </HeaderRightButton>
  );
}

export default function HeaderShareButtonWithContext() {
  return (
    <BookingDetailContext.Consumer>
      {({ arrivalCityId, arrivalTime }) => (
        <HeaderShareButton
          arrivalCityId={arrivalCityId}
          arrivalTime={arrivalTime}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 21,
    color: Color.brand,
    alignSelf: 'flex-start',
  },
});
