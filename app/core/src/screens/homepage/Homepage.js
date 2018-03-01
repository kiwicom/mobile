// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Layout } from '@kiwicom/react-native-app-shared';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';

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

export default class Homepage extends React.Component<Props, {}> {
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

  render = () => {
    return (
      <Layout>
        <Section>
          <Button title="Hotels" onPress={this.goToAllHotelsPage} />
        </Section>
        <Section>
          <Button title="Hotels in Oslo" onPress={this.goToOslo} />
        </Section>
        <Section>
          <Button title="Hotels in Lima" onPress={this.goToLima} />
        </Section>
        <Section>
          <Logout />
        </Section>
      </Layout>
    );
  };
}
