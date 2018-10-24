// @flow

import * as React from 'react';

import Dimensions from './Dimensions';
import Device from '../Device';

type Props = {|
  +renderOnWide?: React.Node,
  +renderOnNarrow?: React.Node,
|};

// may return nothing:
// 1. renderOnWide set but we have narrow layout
// 2. renderOnNarrow set but we have wide layout
export default class AdaptableLayout extends React.Component<Props> {
  render = () => {
    return (
      <Dimensions.Consumer>
        {dimensions => {
          if (!dimensions) {
            return null;
          }
          const wideLayout = Device.isWideLayout(dimensions);
          if (wideLayout === true && this.props.renderOnWide) {
            return this.props.renderOnWide;
          } else if (wideLayout === false && this.props.renderOnNarrow) {
            return this.props.renderOnNarrow;
          }
          return null;
        }}
      </Dimensions.Consumer>
    );
  };
}
