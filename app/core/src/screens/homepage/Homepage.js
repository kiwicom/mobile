// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Layout, Text } from '@kiwicom/react-native-app-shared';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';
import Translation from '@kiwicom/react-native-app-translations';

import Logout from '../../components/authentication/Logout';

type Props = {|
  navigation: NavigationType,
|};

type State = {|
  cityId: string,
  cityName: string,
|};

function Section({ children }: { children: React.Node }) {
  const sectionStyle = {
    margin: 10,
    padding: 10,
  };
  return <View style={sectionStyle}>{children}</View>;
}

export default class Homepage extends React.Component<Props, State> {
  state = {
    cityId: '',
    cityName: '',
  };

  onLocationSelected = (cityId: string, cityName: string) => {
    this.setState({ cityId, cityName });
  };

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

  openLocations = () => {
    this.props.navigation.navigate({
      routeName: 'LocationPicker',
      key: 'key-HotelsPackage',
      params: {
        onSelect: this.onLocationSelected,
      },
    });
  };

  render = () => {
    return (
      <Layout>
        <Section>
          <Button
            title={<Translation id="Homepage.Hotels" />}
            onPress={this.goToAllHotelsPage}
          />
        </Section>
        <Section>
          <Button
            title={<Translation id="Homepage.HotelsOslo" />}
            onPress={this.goToOslo}
          />
        </Section>
        <Section>
          <Button
            title={<Translation id="Homepage.HotelsLima" />}
            onPress={this.goToLima}
          />
        </Section>
        <Section>
          <Button
            title={<Translation id="Homepage.LocationPicker" />}
            onPress={this.openLocations}
          />
          <Text>Current cityId: {this.state.cityId}</Text>
          <Text>Current cityName: {this.state.cityName}</Text>
        </Section>
        <Section>
          <Logout />
        </Section>
      </Layout>
    );
  };
}
