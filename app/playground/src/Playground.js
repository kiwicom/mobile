// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { HeaderBackButton } from 'react-navigation';

import PlaygroundRenderer from './PlaygroundRenderer';

type Props = {|
  name: string,
  navigation: NavigationType,
  onGoBack: () => void,
|};

const PlaygroundSection = props => (
  <View style={styles.section}>
    <Text style={styles.sectionText}>
      <Translation passThrough={`SAMPLE #${props.index + 1}`} />
    </Text>
    {props.children}
  </View>
);

export default class Playground extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goBack() {
      props.onGoBack();
      props.navigation.goBack();
    }

    return {
      title: 'Playground',
      headerLeft: <HeaderBackButton tintColor="#fff" onPress={goBack} />,
    };
  };

  componentDidCatch = () => {
    // Reset storage if current playground component causes crash
    this.props.onGoBack();
  };

  render = () => (
    <View>
      {PlaygroundRenderer.components[this.props.name].components.map(
        (component, index) => {
          return (
            <PlaygroundSection key={index} index={index}>
              {component}
            </PlaygroundSection>
          );
        },
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#eee',
  },
  sectionText: {
    paddingBottom: 10,
    color: '#888',
    fontSize: 10,
  },
});
