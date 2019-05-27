// @flow strict

import * as React from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Device, type OnLayout } from '@kiwicom/mobile-shared';

import MapScreen from '../map/allHotels/MapScreen';
import AllHotelsSearchList from './AllHotelsSearchList';
import type { RenderSearchResults_data as RenderResultsType } from './__generated__/RenderSearchResults_data.graphql';
import {
  SearchResultsContext,
  type SearchResultState,
} from '../navigation/allHotels/SearchResultsContext';
import LoadMoreButton from './LoadMoreButton';
import CloseModal from '../components/CloseModal';

type Props = {|
  +data: RenderResultsType,
  +hasMore: boolean,
  +isLoading: boolean,
  +onLoadMore: () => void,
  +closeHotels: () => void,
|};

const lowValue = -100;
const transitionDuration = 250;
const paddingBottom = Device.isIPhoneX ? 80 : 44;

export const RenderSearchResults = (props: Props) => {
  const { show }: SearchResultState = React.useContext(SearchResultsContext);
  const [topValue, setTopValue] = React.useState(
    Dimensions.get('window').height,
  );
  const [mapAnimation] = React.useState(
    new Animated.Value(show === 'list' ? topValue : 0),
  );
  const [listAnimation] = React.useState(
    new Animated.Value(show === 'list' ? 0 : lowValue),
  );
  const initialRun = React.useRef(true);

  React.useEffect(() => {
    if (initialRun.current) {
      initialRun.current = false;
      return;
    }

    function animateToMap() {
      Animated.parallel([
        Animated.timing(mapAnimation, {
          toValue: 0,
          duration: transitionDuration,
          useNativeDriver: true,
        }),
        Animated.timing(listAnimation, {
          toValue: lowValue,
          duration: transitionDuration,
          useNativeDriver: true,
        }),
      ]).start();
    }

    function animateToList() {
      Animated.parallel([
        Animated.timing(mapAnimation, {
          toValue: topValue,
          duration: transitionDuration,
          useNativeDriver: true,
        }),
        Animated.timing(listAnimation, {
          toValue: 0,
          duration: transitionDuration,
          useNativeDriver: true,
        }),
      ]).start();
    }
    if (show === 'list') {
      animateToList();
    } else {
      animateToMap();
    }
  }, [listAnimation, mapAnimation, show, topValue]);

  function onLayout(e: OnLayout) {
    setTopValue(e.nativeEvent.layout.height + paddingBottom);
  }

  const data = props.data || [];

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: listAnimation }],
          },
        ]}
        testID="list-wrapper"
        onLayout={onLayout}
      >
        <View style={styles.content}>
          <AllHotelsSearchList
            data={data}
            ListFooterComponent={
              props.hasMore && (
                <LoadMoreButton
                  isLoading={props.isLoading}
                  onPress={props.onLoadMore}
                />
              )
            }
          />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: mapAnimation }],
          },
        ]}
        testID="map-wrapper"
      >
        <MapScreen data={data} />
      </Animated.View>
      <CloseModal onPress={props.closeHotels} />
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom,
    flex: 1,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 56,
  },
});

export default createFragmentContainer(RenderSearchResults, {
  data: graphql`
    fragment RenderSearchResults_data on AllHotelsInterface
      @relay(plural: true) {
      ...AllHotelsSearchList_data
      ...MapScreen_data
    }
  `,
});
