// @flow

import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

// requireNativeComponent automatically resolves this to "SampleViewManager"
// $FlowFixMe
const NativeSampleView = requireNativeComponent('SampleView', SampleView);

type Props = {
  text: string,
};

class SampleView extends Component<Props> {
  render = () => <NativeSampleView text={this.props.text} />;
}

export default SampleView;
