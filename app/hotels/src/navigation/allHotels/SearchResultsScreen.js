// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import {
  LayoutDoubleColumn,
  Button,
  Text,
  StyleSheet,
  AdaptableLayout,
  AdaptableBadge,
  GestureController,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';

import NewAllHotels from '../../allHotels/NewAllHotels';
import NewAllHotelsMap from '../../map/allHotels/NewAllHotelsMap';
import MapHeaderButton from './MapHeaderButton';

type Props = {|
  +navigation: NavigationType,
  +onBackClicked: () => void,
  +cityName: string,
  +checkin: string,
  +lastNavigationMode?: 'present' | 'push',
|};

export default class SearchResultsScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goToAllHotelsMap() {
      props.navigation.navigate('AllHotelsMap');
    }

    return {
      headerRight: (
        <React.Fragment>
          {props.checkin !== null && (
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
      headerLeft: (
        <View style={styles.headerLeftcontainer}>
          <Text style={styles.headerLeftText}>
            <Translation passThrough={props.cityName || ''} />
          </Text>
          {props.checkin !== null && (
            <AdaptableBadge
              style={styles.badge}
              textStyle={styles.badgeText}
              translation={
                <Translation
                  passThrough={DateFormatter(
                    new Date(props.checkin),
                  ).formatCustom({
                    weekday: 'long',
                    day: '2-digit',
                    month: 'long',
                  })}
                />
              }
            />
          )}
        </View>
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
  headerLeftcontainer: {
    flexDirection: 'column',
    paddingStart: 16,
  },
  headerLeftText: {
    fontWeight: '800',
    fontSize: 16,
    color: defaultTokens.colorTextAttention,
    marginBottom: 3,
    paddingTop: 8,
  },
  badgeText: {
    fontSize: 12,
    color: defaultTokens.colorTextPrimary,
  },
  badge: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    marginBottom: 12,
  },
});
