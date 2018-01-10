// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Layout } from '@kiwicom/react-native-app-common';

import Logout from '../../components/authentication/Logout';
import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

function Section({ children }: { children: React.Node }) {
  const sectionStyle = {
    margin: 10,
    padding: 10,
  };
  return <View style={sectionStyle}>{children}</View>;
}

export default class Homepage extends React.Component<Props, {}> {
  goToAllHotelsPage = () => this.props.navigation.navigate('AllHotels');

  render = () => {
    return (
      <Layout>
        <Section>
          <Button title="Hotels" onPress={this.goToAllHotelsPage} />
        </Section>
        <Section>
          <Logout />
        </Section>
      </Layout>
    );
  };
}
