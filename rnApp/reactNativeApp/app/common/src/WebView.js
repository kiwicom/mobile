// @flow

import * as React from 'react';
import { WebView as NativeWebView } from 'react-native';

import FullPageLoading from './loaders/FullPageLoading';

type Props = {
  // not exact - may contain additional properties (extend as needed)
  source: {|
    uri: string,
  |},
};

export default class WebView extends React.Component<Props> {
  renderLoading = () => <FullPageLoading />;

  render = () => (
    <NativeWebView
      startInLoadingState={true}
      renderLoading={this.renderLoading}
      {...this.props}
    />
  );
}
