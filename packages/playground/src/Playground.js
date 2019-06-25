// @flow strict

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import {
  StyleSheet,
  Text,
  Dimensions,
  type DimensionType,
  Translation,
} from '@kiwicom/mobile-shared';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { HeaderBackButton } from 'react-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import PlaygroundRenderer from './PlaygroundRenderer';

type Props = {|
  +name: string,
  +navigation: NavigationType,
  +onGoBack: () => void,
  +dimensions: DimensionType,
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
      headerLeft: (
        <HeaderBackButton
          tintColor={defaultTokens.paletteProductNormal}
          onPress={goBack}
        />
      ),
    };
  };

  componentDidCatch = () => {
    // Reset storage if current playground component causes crash
    this.props.onGoBack();
  };

  render() {
    if (
      !Object.prototype.hasOwnProperty.call(
        PlaygroundRenderer.components,
        this.props.name,
      )
    ) {
      return (
        <Translation
          passThrough={`Component ${this.props.name} no longer exists`}
        />
      );
    }
    return (
      <Dimensions.Provider>
        <ScrollView>
          {PlaygroundRenderer.components[this.props.name].components.map(
            (component, index) => {
              return (
                <PlaygroundSection key={index} index={index}>
                  {component}
                </PlaygroundSection>
              );
            },
          )}
        </ScrollView>
      </Dimensions.Provider>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: defaultTokens.paletteInkDark,
    backgroundColor: defaultTokens.paletteWhite,
  },
  sectionText: {
    paddingBottom: 10,
    color: defaultTokens.colorTextAttention,
    fontSize: 10,
  },
});
