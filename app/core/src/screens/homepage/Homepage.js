// @flow

import * as React from 'react';
import { View } from 'react-native';
import { TextButton, LayoutSingleColumn } from '@kiwicom/mobile-shared';
import { type NavigationType } from '@kiwicom/mobile-navigation';
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
  goToAllHotelsPage = () => this.props.navigation.navigate('HotelsPackage');

  goToOslo = () => {
    this.props.navigation.navigate('HotelsPackage', {
      coordinates: {
        latitude: 59.9139,
        longitude: 10.7522,
      },
    });
  };

  goToLima = () => {
    this.props.navigation.navigate('HotelsPackage', {
      coordinates: {
        latitude: -12.046374,
        longitude: -77.042793,
      },
    });
  };

  goToSingleHotel = () => {
    this.props.navigation.navigate('SingleHotelPackage');
  };

  searchWithDates = () => {
    this.props.navigation.navigate('HotelsPackage', {
      checkin: DateFormatter(DateUtils().addDays(30)).formatForMachine(),
      checkout: DateFormatter(DateUtils().addDays(36)).formatForMachine(),
    });
  };

  render = () => {
    return (
      <LayoutSingleColumn>
        <Section>
          <TextButton
            title={<Translation passThrough="Hotels" />}
            onPress={this.goToAllHotelsPage}
          />
        </Section>
        <Section>
          <TextButton
            title={<Translation passThrough="Hotels in Oslo" />}
            onPress={this.goToOslo}
          />
        </Section>
        <Section>
          <TextButton
            title={<Translation passThrough="Hotels in Lima" />}
            onPress={this.goToLima}
          />
        </Section>
        <Section>
          <TextButton
            title={<Translation passThrough="Go to single hotel" />}
            onPress={this.goToSingleHotel}
          />
        </Section>
        <Section>
          <TextButton
            title={
              <Translation passThrough="Search with checkin and checkout dates" />
            }
            onPress={this.searchWithDates}
          />
        </Section>
      </LayoutSingleColumn>
    );
  };
}
