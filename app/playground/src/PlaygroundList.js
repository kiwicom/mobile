// @flow

import * as React from 'react';
import { FlatList, View } from 'react-native';
import type { NavigationType } from '@kiwicom/mobile-navigation';
import { WithStorage } from '@kiwicom/mobile-shared';

import '../../shared/src/forms/datePicker/__tests__/DatePicker.test.js';
import '../../hotels/src/allHotels/__tests__/LoadMoreButton.test.js';
import '../../hotels/src/allHotels/searchForm/locationPicker/__tests__/RecentSearches.test.js';
import '../../hotels/src/allHotels/searchForm/locationPicker/__tests__/SuggestionList.test.js';
import '../../hotels/src/filter/stars/__tests__/StarsFilter.test.js';
import '../../hotels/src/filter/stars/__tests__/StarsPopup.test.js';
import '../../hotels/src/gallery/__tests__/PhotosStripeHeader.test.js';
import '../../hotels/src/singleHotel/bookNow/__tests__/BookNow.test.js';
import '../../hotels/src/singleHotel/roomList/__tests__/RoomBadges.test.js';
import '../../hotels/src/singleHotel/roomList/__tests__/RoomDescription.test.js';
import '../../hotels/src/singleHotel/roomPicker/__tests__/RoomPicker.test.js';
import '../../shared/src/__tests__/ReadMore.test.js';
import '../../shared/src/__tests__/Text.test.js';
import '../../shared/src/badge/__tests__/AdaptableBadge.test.js';
import '../../shared/src/buttons/__tests__/Button.test.js';
import '../../shared/src/buttons/__tests__/IncrementDecrementButtons.test.js';
import '../../shared/src/cards/__tests__/SimpleCard.test.js';
import '../../shared/src/forms/__tests__/Slider.test.js';
import '../../shared/src/popup/__tests__/ButtonPopupPlayground.test.js';
import PlaygroundListItem from './PlaygroundListItem';
import PlaygroundRenderer from './PlaygroundRenderer';

type PlaygroundComponent = {|
  name: string,
|};

type Props = {|
  navigation: NavigationType,
  storageValue: string | null,
  saveToStorage: (value: string | null) => Promise<void>,
|};

export class PlaygroundList extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Playground components',
  });

  componentDidUpdate = () => {
    if (this.props.storageValue) {
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
