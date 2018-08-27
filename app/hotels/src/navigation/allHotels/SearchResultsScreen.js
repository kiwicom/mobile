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
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import NewAllHotels from '../../allHotels/NewAllHotels';
import NewAllHotelsMap from '../../map/allHotels/NewAllHotelsMap';
import MapHeaderButton from './MapHeaderButton';
import { withHotelsContext } from '../../HotelsContext';

type Props = {|
  +navigation: NavigationType,
  +onBackClicked: () => void,
  +setIsNew: (isNew: boolean) => void,
  +cityName: string,
  +checkin: string,
|};

class SearchResultsScreen extends React.Component<Props> {
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

  componentDidMount = () => {
    this.props.setIsNew(true);
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

export default withHotelsContext(state => ({
  setIsNew: state.actions.setIsNew,
}))(SearchResultsScreen);
