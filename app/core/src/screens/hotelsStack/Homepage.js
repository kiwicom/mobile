// @flow

import * as React from 'react';
import { View } from 'react-native';
import { TextButton, LayoutSingleColumn } from '@kiwicom/mobile-shared';
import { type NavigationType, HeaderTitle } from '@kiwicom/mobile-navigation';
import {
  Translation,
  DateFormatter,
  DateUtils,
} from '@kiwicom/mobile-localization';

type Props = {|
  +navigation: NavigationType,
|};

function Section({ children }: { children: React.Node }) {
  const sectionStyle = {
    margin: 10,
    padding: 10,
  };
  return <View style={sectionStyle}>{children}</View>;
}

export default class Homepage extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: (
      <HeaderTitle>
        <Translation passThrough="Welcome to rn-hotels" />
      </HeaderTitle>
    ),
  };

  goToNewHotelsPage = () =>
    this.props.navigation.navigate('NewHotelsPackage', {
      cityId: 'aG90ZWxDaXR5Oi0zNzI0OTA=',
      cityName: 'Barcelona',
      currency: 'EUR',
      checkin: DateFormatter(DateUtils().addDays(30)).formatForMachine(),
      checkout: DateFormatter(DateUtils().addDays(36)).formatForMachine(),
      roomsConfiguration: [{ adultsCount: 1, children: [] }],
    });

  goToStay22HotelsPage = () =>
    this.props.navigation.navigate('NewHotelsPackage', {
      cityName: 'Split',
      currency: 'EUR',
      checkin: DateFormatter(DateUtils().addDays(30)).formatForMachine(),
      checkout: DateFormatter(DateUtils().addDays(36)).formatForMachine(),
      roomsConfiguration: [{ adultsCount: 1, children: [] }],
      coordinates: { latitude: 43.508133, longitude: 16.440193 },
    });

  goToSingleHotel = () => {
    this.props.navigation.navigate('SingleHotelPackage');
  };

  render = () => {
    return (
      <LayoutSingleColumn testID="homePage">
        <Section>
          <TextButton
            title={<Translation passThrough="Hotels" />}
            testID="homePage__Hotels-button"
            onPress={this.goToNewHotelsPage}
          />
        </Section>

        <Section>
          <TextButton
            title={<Translation passThrough="Stay 22Hotels" />}
            onPress={this.goToStay22HotelsPage}
          />
        </Section>

        <Section>
          <TextButton
            title={<Translation passThrough="Go to single hotel" />}
            onPress={this.goToSingleHotel}
          />
        </Section>
      </LayoutSingleColumn>
    );
  };
}
