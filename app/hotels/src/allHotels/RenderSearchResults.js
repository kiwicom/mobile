// @flow strict

import * as React from 'react';
import { Animated, ScrollView } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Device } from '@kiwicom/mobile-shared';

import MapScreen from '../map/allHotels/MapScreen';
import AllHotelsSearchList from './AllHotelsSearchList';
import type { RenderSearchResults as RenderResultsType } from './__generated__/RenderSearchResults.graphql';
import SearchResultsContext, {
  type ResultType,
} from '../navigation/allHotels/SearchResultsContext';
import LoadMoreButton from './LoadMoreButton';

type PropsWithContext = {|
  ...Props,
  +show: ResultType,
|};

export const topValue = 1000;
export const lowValue = -100;
const transitionDuration = 250;

export class RenderSearchResults extends React.Component<PropsWithContext> {
  mapAnimation: Animated.Value;
  listAnimation: Animated.Value;

  constructor(props: PropsWithContext) {
    super(props);

    const showList = props.show === 'list';
    this.mapAnimation = new Animated.Value(showList ? topValue : 0);
    this.listAnimation = new Animated.Value(showList ? 0 : lowValue);
  }

  componentDidUpdate = (prevProps: PropsWithContext) => {
    if (prevProps.show === 'list' && this.props.show === 'map') {
      this.animateToMap();
    }
    if (prevProps.show === 'map' && this.props.show === 'list') {
      this.animateToList();
    }
  };

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

  render = () => {
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
          {/*  Note: it's not possible to use FlatList here because it's wrapped with ScrollView and it causes performance issues.*/}
          <ScrollView contentContainerStyle={styles.content}>
            <AllHotelsSearchList data={data} />
            {this.props.hasMore && (
              <LoadMoreButton
                isLoading={this.props.isLoading}
                onPress={this.props.onLoadMore}
              />
            )}
          </ScrollView>
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
      </React.Fragment>
    );
  };
}

type Props = {|
  +data: RenderResultsType,
  +hasMore: boolean,
  +isLoading: boolean,
  +onLoadMore: () => void,
  +top: number,
|};

class RenderSearchResultsWithContext extends React.Component<Props> {
  renderInner = ({ show }) => (
    <RenderSearchResults {...this.props} show={show} />
  );

  render() {
    return (
      <SearchResultsContext.Consumer>
        {this.renderInner}
      </SearchResultsContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: Device.isIPhoneX ? 80 : 44,
  },
});

export default createFragmentContainer(
  RenderSearchResultsWithContext,
  graphql`
    fragment RenderSearchResults on AllHotelsInterface @relay(plural: true) {
      ...AllHotelsSearchList
      ...MapScreen
    }
  `,
);
