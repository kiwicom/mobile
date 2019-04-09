// @flow

import * as React from 'react';
import NativeWebView from 'react-native-webview';

import Translation from './Translation';
import GeneralError from './errors/GeneralError';
import type { WebViewStateChangeEvent } from '../types/Events';

type Props = {|
  +source: {|
    +uri: string,
  |},
  onNavigationStateChange?: (event: WebViewStateChangeEvent) => void,
  testID?: string,
|};

export default class WebView extends React.Component<Props> {
  renderError = () => (
    <GeneralError
      // this message is most probably not true:
      errorMessage={<Translation id="shared.web_view.no_internet_connection" />}
    />
  );

  onNavigationStateChange = (event: WebViewStateChangeEvent) => {
    if (this.props.onNavigationStateChange) {
      this.props.onNavigationStateChange(event);
    }
  };

  render() {
    return (
      <NativeWebView
        bounces={false}
        startInLoadingState={true} // Prefer to see loader than blank screen
        renderError={this.renderError}
        onNavigationStateChange={this.onNavigationStateChange}
        {...this.props}
      />
    );
  }
}
