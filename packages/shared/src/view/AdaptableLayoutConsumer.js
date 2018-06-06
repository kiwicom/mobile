// @flow

import * as React from 'react';

import Context from './AdaptableLayoutContext';
import Device from '../Device';

type Props = {|
  +renderOnWide?: React.Node,
  +renderOnNarrow?: React.Node,
|};

type State = {|
  wideLayout: boolean,
|};

export default class AdaptableLayoutConsumer extends React.Component<
  Props,
  State,
> {
  unsubscribeDimensionListener: Function = () => {};

  state = {
    wideLayout: Device.isWideLayout(),
  };

  componentDidMount = () => {
    this.unsubscribeDimensionListener = Device.subscribeToDimensionChanges(
      ({ width }) => {
        this.setState({
          wideLayout: width > Device.getWideDeviceThreshold(),
        });
      },
    );
  };

  componentWillUnmount = () => {
    this.unsubscribeDimensionListener();
  };

  render = () => {
    // may return nothing:
    // 1. renderOnWide set but we have narrow layout
    // 2. renderOnNarrow set but we have wide layout
    let children = null;

    if (this.state.wideLayout === true && this.props.renderOnWide) {
      children = this.props.renderOnWide;
    } else if (this.state.wideLayout === false && this.props.renderOnNarrow) {
      children = this.props.renderOnNarrow;
    }

    return (
      <Context.Consumer>
        {contextValue => {
          if (contextValue.isSet === false) {
            if (process.env.NODE_ENV !== 'test') {
              throw new Error(
                'AdaptableLayout has been called in wrong context. You have to ' +
                  'use "AdaptableLayout.Provider" on the root level first ' +
                  "otherwise it won't work.",
              );
            }
          }

          return children;
        }}
      </Context.Consumer>
    );
  };
}
