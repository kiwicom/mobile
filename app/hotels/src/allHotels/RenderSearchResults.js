// @flow strict

import * as React from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Device } from '@kiwicom/mobile-shared';

import MapScreen from '../map/allHotels/MapScreen';
import AllHotelsSearchList from './AllHotelsSearchList';
import type { RenderSearchResults_data as RenderResultsType } from './__generated__/RenderSearchResults_data.graphql';
import {
  withSearchResultsContext,
  type SearchResultState,
  type ResultType,
} from '../navigation/allHotels/SearchResultsContext';
import LoadMoreButton from './LoadMoreButton';
import CloseModal from '../components/CloseModal';

type Props = {|
  +data: RenderResultsType,
  +hasMore: boolean,
  +isLoading: boolean,
  +onLoadMore: () => void,
  +top: number,
  +show: ResultType,
  +closeHotels: () => void,
|};

export const topValue = Dimensions.get('window').height;
export const lowValue = -100;
const transitionDuration = 250;

export class RenderSearchResults extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    const showList = props.show === 'list';
    this.mapAnimation = new Animated.Value(showList ? topValue : 0);
    this.listAnimation = new Animated.Value(showList ? 0 : lowValue);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.show === 'list' && this.props.show === 'map') {
      this.animateToMap();
    }
    if (prevProps.show === 'map' && this.props.show === 'list') {
      this.animateToList();
    }
  }

  mapAnimation: Animated.Value;
  listAnimation: Animated.Value;

  animateToMap = () => {
    Animated.parallel([
      Animated.timing(this.mapAnimation, {
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
      Animated.timing(this.listAnimation, {
        toValue: lowValue,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  animateToList = () => {
    Animated.parallel([
      Animated.timing(this.mapAnimation, {
        toValue: topValue,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
      Animated.timing(this.listAnimation, {
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  render() {
    const data = this.props.data || [];

    return (
      <React.Fragment>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            top: this.props.top,
            transform: [{ translateY: this.listAnimation }],
          }}
        >
          <View style={styles.content}>
            <AllHotelsSearchList
              data={data}
              ListFooterComponent={
                this.props.hasMore && (
                  <LoadMoreButton
                    isLoading={this.props.isLoading}
                    onPress={this.props.onLoadMore}
                  />
                )
              }
            />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            top: this.props.top,
            transform: [{ translateY: this.mapAnimation }],
          }}
        >
          <MapScreen data={data} />
        </Animated.View>
        <CloseModal onPress={this.props.closeHotels} />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: Device.isIPhoneX ? 80 : 44,
    flex: 1,
  },
});

const select = ({ show }: SearchResultState) => ({ show });

export default createFragmentContainer(
  withSearchResultsContext(select)(RenderSearchResults),
  {
    data: graphql`
      fragment RenderSearchResults_data on AllHotelsInterface
        @relay(plural: true) {
        ...AllHotelsSearchList_data
        ...MapScreen_data
      }
    `,
  },
);
