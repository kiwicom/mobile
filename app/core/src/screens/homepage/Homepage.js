// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Layout } from '@kiwicom/mobile-shared';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';

import Logout from '../../components/authentication/Logout';

type Props = {|
  navigation: NavigationType,
|};

function Section({ children }: { children: React.Node }) {
  const sectionStyle = {
    margin: 10,
    padding: 10,
  };
  return <View style={sectionStyle}>{children}</View>;
}

export default class Homepage extends React.Component<Props> {
  goToAllHotelsPage = () =>
    this.props.navigation.navigate({
      routeName: 'HotelsPackage',
      key: 'key-HotelsPackage',
    });

  goToOslo = () => {
    this.props.navigation.navigate({
      routeName: 'HotelsPackage',
      key: 'key-HotelsPackage',
      params: {
        coordinates: {
          latitude: 59.9139,
          longitude: 10.7522,
        },
      },
    });
  };

  goToLima = () => {
    this.props.navigation.navigate({
      routeName: 'HotelsPackage',
      key: 'key-HotelsPackage',
      params: {
        coordinates: {
          latitude: -12.046374,
          longitude: -77.042793,
        },
      },
    });
  };

  goToSingleHotel = () => {
    this.props.navigation.navigate({
      routeName: 'SingleHotelPackage',
      key: 'key-SingleHotelPackage',
    });
  };

  searchWithDates = () => {
    this.props.navigation.navigate({
      routeName: 'HotelsPackage',
      key: 'key-HotelsPackage',
      params: {
        checkin: DateFormatter()
          .add(30, 'days')
          .format('YYYY-MM-DD'),
        checkout: DateFormatter()
          .add(36, 'days')
          .format('YYYY-MM-DD'),
      },
    });
  };

  render = () => {
    return (
      <Layout>
        <Section>
          <Button
            title={<Translation passThrough="Hotels" />}
            onPress={this.goToAllHotelsPage}
          />
        </Section>
        <Section>
          <Button
            title={<Translation passThrough="Hotels in Oslo" />}
            onPress={this.goToOslo}
          />
        </Section>
        <Section>
          <Button
            title={<Translation passThrough="Hotels in Lima" />}
            onPress={this.goToLima}
          />
        </Section>
        <Section>
          <Button
            title={<Translation passThrough="Go to single hotel" />}
            onPress={this.goToSingleHotel}
          />
        </Section>
        <Section>
          <Button
            title={
              <Translation passThrough="Search with checkin and checkout dates" />
            }
            onPress={this.searchWithDates}
          />
        </Section>
        <Section>
          <Logout />
        </Section>
      </Layout>
    );
  };
}
