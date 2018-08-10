// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import {
  LayoutDoubleColumn,
  AdaptableLayout,
  Button,
  Text,
  StyleSheet,
  Color,
} from '@kiwicom/mobile-shared';

import NewAllHotels from '../../allHotels/NewAllHotels';
import NewAllHotelsMap from '../../map/allHotels/NewAllHotelsMap';
import MapHeaderButton from './MapHeaderButton';

type Props = {|
  +navigation: NavigationType,
  +onBackClicked: () => void,
|};

export default class SearchResultsScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goToAllHotelsMap() {
      props.navigation.navigate('AllHotelsMap');
    }

    return {
      headerTitle: (
        <HeaderTitle>
          <Translation id="hotels.navigation.title.all_hotels" />
        </HeaderTitle>
      ),
      headerRight: (
        <AdaptableLayout
          renderOnNarrow={<MapHeaderButton onPress={goToAllHotelsMap} />}
        />
      ),
    };
  };

  render = () => (
    <LayoutDoubleColumn
      menuComponent={
        <View style={styles.container}>
          <NewAllHotels />
          <Button onPress={this.props.onBackClicked} style={styles.button}>
            <Text style={styles.text}>
              <Translation id="shared.button.close" />
            </Text>
          </Button>
        </View>
      }
      containerComponent={<NewAllHotelsMap />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 8,
    start: 8,
    end: 8,
    backgroundColor: Color.inputBackground,
  },
  text: {
    fontWeight: '800',
    fontSize: 16,
  },
});
