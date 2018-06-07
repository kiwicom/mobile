// @flow strict

import * as React from 'react';
import { AssetsDownloader } from '@kiwicom/mobile-assets';
import { FullPageLoading } from '@kiwicom/mobile-shared';

import PdfViewer from './PdfViewer';

type Props = {|
  +fileName: string,
  +url: string,
  +overwriteExisting?: boolean,
|};

type State = {|
  url: string | null,
|};

export default class PdfViewAndStore extends React.Component<Props, State> {
  state = {
    url: null,
  };

  static defaultProps = {
    overwriteExisting: false,
  };

  componentDidMount = async () => {
    const addedFileName = await AssetsDownloader(
      this.props.fileName,
      this.props.url,
      this.props.overwriteExisting,
    );
    this.setState({ url: addedFileName });
  };

  render = () => {
    const { url } = this.state;

    if (url === null) {
      return <FullPageLoading />;
    }

    return <PdfViewer uri={url} cache={false} />;
  };
}
