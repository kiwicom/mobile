// @flow

import * as React from 'react';

import Device from '../Device';

type Props = {|
  renderOnWide?: React.Node,
  renderOnNarrow?: React.Node,
|};

type State = {|
  wideLayout: boolean,
|};

export default class AdaptableLayout extends React.Component<Props, State> {
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
    if (this.state.wideLayout === true && this.props.renderOnWide) {
      return this.props.renderOnWide;
    } else if (this.state.wideLayout === false && this.props.renderOnNarrow) {
      return this.props.renderOnNarrow;
    }

    // may return nothing:
    // 1. renderOnWide set but we have narrow layout
    // 2. renderOnNarrow set but we have wide layout
    return null;
  };
}
