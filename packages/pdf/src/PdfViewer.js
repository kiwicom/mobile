// @flow strict

import * as React from 'react';
import Pdf from 'react-native-pdf';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, GeneralError } from '@kiwicom/mobile-shared';

type Props = {|
  +uri: string,
  +cache?: boolean,
  +expiration?: number,
  +onError?: () => void,
  +onLoad?: (numberOfPages: number, filePath: string) => void,
|};

type State = {|
  hasLoadingFailed: boolean,
|};

export default class PdfViewer extends React.Component<Props, State> {
  state = {
    hasLoadingFailed: false,
  };

  static defaultProps = {
    cache: true,
    expiration: Infinity,
  };

  onLoad = (numberOfPages: number, filePath: string) => {
    if (this.props.onLoad) {
      this.props.onLoad(numberOfPages, filePath);
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
          source={{
            uri: this.props.uri,
            cache: this.props.cache,
            expiration: this.props.expiration,
          }}
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
