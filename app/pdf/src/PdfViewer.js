// @flow

import * as React from 'react';
import Pdf from 'react-native-pdf';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, GeneralError } from '@kiwicom/mobile-shared';

type Props = {|
  source: {|
    uri: string,
    cache?: boolean,
  |},
  onError?: () => void,
  onLoad?: () => void,
|};

type State = {|
  hasLoadingFailed: boolean,
|};

export default class PdfViewer extends React.Component<Props, State> {
  state = {
    hasLoadingFailed: false,
  };

  onLoad = () => {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  onError = () => {
    this.setState({ hasLoadingFailed: true });
    if (this.props.onError) {
      this.props.onError();
    }
  };

  render = () => {
    return (
      <React.Fragment>
        <Pdf
          style={StyleSheet.absoluteFill}
          onError={this.onError}
          onLoadComplete={this.onLoad}
          source={this.props.source}
        />
        {this.state.hasLoadingFailed && (
          <GeneralError
            errorMessage={<Translation id="shared.pdf_viewer.load_failed" />}
          />
        )}
      </React.Fragment>
    );
  };
}
