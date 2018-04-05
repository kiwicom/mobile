// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Layout } from '@kiwicom/react-native-app-shared';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

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

  render = () => {
    return (
      <Layout>
        <Section>
          <Button
            title={<DummyTranslation id="Hotels" />}
            onPress={this.goToAllHotelsPage}
          />
        </Section>
        <Section>
          <Button
            title={<DummyTranslation id="Hotels in Oslo" />}
            onPress={this.goToOslo}
          />
        </Section>
        <Section>
          <Button
            title={<DummyTranslation id="Hotels in Lima" />}
            onPress={this.goToLima}
          />
        </Section>
        <Section>
          <Button
            title={<DummyTranslation id="Go to single hotel" />}
            onPress={this.goToSingleHotel}
          />
        </Section>
        <Section>
          <Logout />
        </Section>
      </Layout>
    );
  };
}
