// @flow strict

import * as React from 'react';
import { Animated } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, AdaptableLayout } from '@kiwicom/mobile-shared';

import MapScreen from '../map/allHotels/MapScreen';
import AllHotelsSearchList from './AllHotelsSearchList';
import type { RenderSearchResults as RenderResultsType } from './__generated__/RenderSearchResults.graphql';
import SearchResultsContext, {
  type ResultType,
} from '../navigation/allHotels/SearchResultsContext';

type PropsWithContext = {|
  ...Props,
  +show: ResultType,
|};

const topValue = 1000;
const lowValue = -100;

class RenderSearchResults extends React.Component<PropsWithContext> {
  mapAnimation;
  listAnimation;

  constructor(props) {
    super(props);

    const showList = props.show === 'list';
    this.mapAnimation = new Animated.Value(showList ? topValue : 0);
    this.listAnimation = new Animated.Value(showList ? 0 : lowValue);
  }

  componentDidUpdate = (prevProps: PropsWithContext) => {
    if (prevProps.show === 'list' && this.props.show === 'map') {
      Animated.parallel([
        Animated.timing(this.mapAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(this.listAnimation, {
          toValue: lowValue,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
    if (prevProps.show === 'map' && this.props.show === 'list') {
      Animated.parallel([
        Animated.timing(this.mapAnimation, {
          toValue: topValue,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(this.listAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };
  render = () => (
    <React.Fragment>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          top: 56,
          transform: [{ translateY: this.listAnimation }],
        }}
      >
        <AllHotelsSearchList
          data={this.props.data}
          openSingleHotel={this.props.openSingleHotel}
        />
      </Animated.View>
      <AdaptableLayout
        renderOnNarrow={
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              top: 56,
              transform: [{ translateY: this.mapAnimation }],
            }}
          >
            <MapScreen
              data={this.props.data}
              onOpenSingleHotel={this.props.openSingleHotel}
            />
          </Animated.View>
        }
      />
    </React.Fragment>
  );
}
type Props = {|
  +data: RenderResultsType,
  +openSingleHotel: () => void,
|};

const RenderSearchResultsWithContext = (props: Props) => (
  <SearchResultsContext.Consumer>
    {({ show }) => {
      return <RenderSearchResults {...props} show={show} />;
    }}
  </SearchResultsContext.Consumer>
);

export default createFragmentContainer(
  RenderSearchResultsWithContext,
  graphql`
    fragment RenderSearchResults on RootQuery {
      ...AllHotelsSearchList_data
      ...MapScreen
    }
  `,
);
