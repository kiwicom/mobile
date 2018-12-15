// @flow

import * as React from 'react';
import { GeneralError, OfflineScreen, Logger } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { PublicApiRenderer } from '@kiwicom/mobile-relay';

import CloseModal from '../components/CloseModal';

type Props = {|
  +onClose: () => void,
  +query: string,
  +variables: Object,
  +render: (props: Object) => React.Node,
  +shouldRenderDateError: boolean,
|};

export default class HotelsSearch extends React.Component<Props> {
  componentDidMount() {
    // $FlowExpectedError: Query is actually a function (tagged literal)
    const { text: query } = this.props.query();
    Logger.hotelsResultsDisplayed(query, JSON.stringify(this.props.variables));
  }

  renderOfflineScreen = (retry: () => void) => {
    return <OfflineScreen onClose={this.props.onClose} onTryAgain={retry} />;
  };

  render() {
    if (this.props.shouldRenderDateError) {
      return (
        <GeneralError
          testID="render-error"
          errorMessage={
            <Translation id="hotels_search.all_hotels_search.date_error" />
          }
        />
      );
    }

    return (
      <PublicApiRenderer
        renderOfflineScreen={this.renderOfflineScreen}
        footer={<CloseModal onPress={this.props.onClose} />}
        query={this.props.query}
        variables={this.props.variables}
        render={this.props.render}
      />
    );
  }
}
