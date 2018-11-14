// @flow

import * as React from 'react';
import { Dimensions } from 'react-native';
import { type DimensionType } from '@kiwicom/mobile-shared';

import Context from './DimensionsContext';

type Props = {|
  +children: DimensionType => React.Node,
|};

export default class DimensionsConsumer extends React.Component<Props> {
  render() {
    return (
      <Context.Consumer>
        {({ dimensions }) => {
          if (dimensions == null) {
            // Dimensions on Android are fine from Dimensions module
            // so we do not to explicit pass them on a native app
            const { height, width } = Dimensions.get('window');
            return this.props.children({
              width,
              height,
            });
          }
          return this.props.children(dimensions);
        }}
      </Context.Consumer>
    );
  }
}
