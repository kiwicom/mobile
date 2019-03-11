// @flow

import * as React from 'react';
import { Dimensions } from 'react-native';

import { type DimensionType } from '../../types/Objects';
import Context from './DimensionsContext';

type Props = {|
  +children: DimensionType => React.Node,
|};

type InjectedProps = {|
  +width?: number,
  +height?: number,
|};

export function withDimensions<PassedProps: {}>(
  Component: React.AbstractComponent<PassedProps>,
): React.AbstractComponent<$Diff<PassedProps, InjectedProps>> {
  return class WithDimensions extends React.Component<
    $Diff<PassedProps, InjectedProps>,
  > {
    renderInner = ({ dimensions }) => {
      let height;
      let width;
      if (dimensions == null) {
        const window = Dimensions.get('window');
        height = window.height;
        width = window.width;
      } else {
        height = dimensions.height;
        width = dimensions.width;
      }
      return <Component {...this.props} height={height} width={width} />;
    };

    render() {
      return <Context.Consumer>{this.renderInner}</Context.Consumer>;
    }
  };
}

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
