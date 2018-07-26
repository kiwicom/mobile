// @flow

import * as React from 'react';
import { WebView as NativeWebView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';

import GeneralError from './errors/GeneralError';
import type { WebViewStateChangeEvent } from '../types/Events';

type Props = {|
  +source: {|
    +uri: string,
  |},
  onNavigationStateChange?: (event: WebViewStateChangeEvent) => void,
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

  render = () => (
    <NativeWebView
      bounces={false}
      startInLoadingState={false} // it feels faster because we don't have to wait until the page is fully loaded
      renderError={this.renderError}
      onNavigationStateChange={this.onNavigationStateChange}
      {...this.props}
    />
  );
}
