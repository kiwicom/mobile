// @flow strict

import * as React from 'react';
import { FlatList, View } from 'react-native';
import type { NavigationType } from '@kiwicom/mobile-navigation';
import { WithStorage } from '@kiwicom/mobile-shared';

import PlaygroundListItem from './PlaygroundListItem';
import PlaygroundRenderer from './PlaygroundRenderer';
import './PlaygroundImports';

type PlaygroundComponent = {|
  name: string,
|};

type Props = {|
  +navigation: NavigationType,
  +storageValue: string | null,
  +saveToStorage: (value: string | null) => Promise<void>,
|};

export class PlaygroundList extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Playground components',
  });

  componentDidUpdate = () => {
    if (this.props.storageValue !== null) {
      this.navigateToPlayground(this.props.storageValue);
    }
  };

  componentDidCatch = () => {
    this.props.saveToStorage(null);
  };

  keyExtractor = (item: PlaygroundComponent) => item;

  renderItem = ({ item }: { item: string }) => (
    <PlaygroundListItem name={item} onPress={this.navigateToPlayground} />
  );

  navigateToPlayground = (name: string) => {
    this.props.saveToStorage(name);
    this.props.navigation.navigate({
      routeName: 'Playground',
      key: 'key-Playground',
      params: {
        name,
        onGoBack: this.onBackClicked,
      },
    });
  };

  onBackClicked = () => {
    this.props.saveToStorage(null);
  };

  getPlaygroundComponents = () => {
    const sortedComponents: Array<string> = Object.keys(
      PlaygroundRenderer.components,
    ).sort((a: string, b: string) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    return sortedComponents;
  };

  render = () => (
    <View>
      <FlatList
        data={this.getPlaygroundComponents()}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        bounces={false}
      />
    </View>
  );
}

export default WithStorage(PlaygroundList, 'Playground:currentComponent', null);
