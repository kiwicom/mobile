// @flow

import * as React from 'react';
import { WebView as NativeWebView } from 'react-native';

import FullPageLoading from './loaders/FullPageLoading';
import GeneralError from './errors/GeneralError';

type Props = {
  // not exact - may contain additional properties (extend as needed)
  source: {|
    uri: string,
  |},
};

export default class WebView extends React.Component<Props> {
  renderLoading = () => <FullPageLoading />;

  renderError = (
    // types 'any' are hardcoded in RN WebView
    errorDomain: any,
    errorCode: any,
    errorDescription: any,
  ) => {
    return (
      <GeneralError
        // this message is most probably not true:
        errorMessage="No internet connection, please check your internet settings or try it later."
        privateErrorInformation={{
          errorDomain,
          errorCode,
          errorDescription,
        }}
      />
    );
  };

  render = () => (
    <NativeWebView
      startInLoadingState={true}
      renderLoading={this.renderLoading}
      renderError={this.renderError}
      {...this.props}
    />
  );
}
