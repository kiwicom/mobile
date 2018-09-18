// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import {
  LayoutDoubleColumn,
  Button,
  Text,
  StyleSheet,
  AdaptableLayout,
  GestureController,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';

import NewAllHotels from '../../allHotels/NewAllHotels';
import NewAllHotelsMap from '../../map/allHotels/NewAllHotelsMap';
import MapHeaderButton from './MapHeaderButton';
import HotelsNavigationOptions from '../HotelsNavigationOptions';

type Props = {|
  +navigation: NavigationType,
  +onBackClicked: () => void,
  +cityName: string,
  +checkin: string,
  +checkout: string,
  +lastNavigationMode?: 'present' | 'push',
|};

export default class SearchResultsScreen extends React.Component<Props> {
  static navigationOptions = ({
    checkin,
    checkout,
    cityName,
    navigation,
  }: Props) => {
    function goToAllHotelsMap() {
      navigation.navigate('AllHotelsMap');
    }

    return {
      ...HotelsNavigationOptions({ checkin, checkout, cityName }),
      headerRight: (
        <React.Fragment>
          {checkin !== null && (
            <AdaptableLayout
              renderOnNarrow={
                <MapHeaderButton
                  onPress={goToAllHotelsMap}
                  iconColor={defaultTokens.paletteInkLight}
                />
              }
            />
          )}
        </React.Fragment>
      ),
    };
  };

  onClosePress = () => {
    // This prop will only come if we launch this screen from a native app
    if (this.props.lastNavigationMode === 'present') {
      GestureController.closeModal('NewKiwiHotels');
    } else {
      this.props.onBackClicked();
    }
  };

  render = () => (
    <LayoutDoubleColumn
      menuComponent={
        <SafeAreaView style={[styles.container, styles.safeArea]}>
          <View style={styles.container}>
            <NewAllHotels />
            <Button onPress={this.onClosePress} style={styles.button}>
              <Text style={styles.text}>
                <Translation id="shared.button.close" />
              </Text>
            </Button>
          </View>
        </SafeAreaView>
      }
      containerComponent={<NewAllHotelsMap />}
    />
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: defaultTokens.paletteWhite,
  },
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 8,
    start: 8,
    end: 8,
    backgroundColor: defaultTokens.paletteCloudNormal,
  },
  text: {
    fontWeight: '800',
    fontSize: 16,
  },
});
