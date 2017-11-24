// @flow

import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { graphql } from 'react-relay';

import config from '../../../../config/application';
import { headerHeight } from './SearchHeader';
import PublicApiRenderer from '../../../components/relay/PublicApiRenderer';
import Layout from '../../../components/visual/view/Layout';
import LocationSuggestionsContainer from './LocationSuggestions';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Props = {|
  visible: boolean,
  onLocationSelected: (locationId: string, locationName: string) => void,
  /**
   * What user typed to the last focused field?
   */
  userTyped: string,
  /**
   * Name (identifier) of the last focused field so it can be updated.
   */
  lastFocusedField: string,
|};

type State = {|
  top: number,
|};

/**
 * This component is animated wrapper (container) around 'LocationSuggestions'.
 * The ability to expand (or hide) is controlled by 'visible' property.
 */
const LocationSuggestionsWrapper = class LocationSuggestionsWrapper extends React.Component<
  Props,
  State,
> {
  state = {
    top: new Animated.Value(this.props.visible ? headerHeight : windowHeight), // default
  };

  componentWillReceiveProps = (nextProps: Props) => {
    Animated.timing(this.state.top, {
      toValue: nextProps.visible ? headerHeight : windowHeight,
      duration: config.animations.duration,
    }).start();
  };

  render = () => (
    <Animated.View
      style={{
        position: 'absolute',
        top: this.state.top,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#fff',
        zIndex: 1,
      }}
    >
      <Layout>
        <PublicApiRenderer
          query={LocationSuggestionsQuery}
          variables={{
            search: this.props.userTyped,
            count: 50,
          }}
          render={props => (
            <LocationSuggestionsContainer
              data={props}
              onLocationSelected={this.props.onLocationSelected}
            />
          )}
          cacheConfig={{
            force: true, // do not cache the request
          }}
        />
      </Layout>
    </Animated.View>
  );
};

export default connect(
  state => ({
    userTyped: state.search.fields[state.search.lastFocusedField],
    lastFocusedField: state.search.lastFocusedField,
  }),
  null,
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
      onLocationSelected: (locationId, locationName) => {
        dispatchProps.dispatch({
          type: 'updateFieldValue',
          identifier: stateProps.lastFocusedField,
          value: locationName,
        });
      },
    };
  },
)(LocationSuggestionsWrapper);

const LocationSuggestionsQuery = graphql`
  query LocationSuggestionsWrapperQuery($search: String, $count: Int!) {
    ...LocationSuggestions
  }
`;
