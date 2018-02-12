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
  goToAllHotelsPage = () => this.props.navigation.navigate('HotelsPackage');

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
