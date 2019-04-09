// @flow

import * as React from 'react';
import {
  GeneralError,
  OfflineScreen,
  Logger,
  Translation,
} from '@kiwicom/mobile-shared';
import {
  PublicApiRenderer,
  type GraphQLTaggedNode,
} from '@kiwicom/mobile-relay';

import CloseModal from '../components/CloseModal';

type Props = {|
  +onClose: () => void,
  +query: GraphQLTaggedNode,
  +variables: Object,
  +render: (props: Object) => React.Node,
  +shouldRenderDateError: boolean,
|};

export default class HotelsSearch extends React.Component<Props> {
  componentDidMount() {
    // $FlowExpectedError: query can be a function see https://github.com/facebook/relay/blob/70bd16e2508b45215df44fa7d4665305e61ee28d/packages/relay-runtime/query/RelayModernGraphQLTag.js#L25
    const query = this.props.query();

    Logger.hotelsResultsDisplayed(
      query?.params?.text,
      JSON.stringify(this.props.variables, null, 2),
    );
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
        errorFooter={<CloseModal onPress={this.props.onClose} />}
        query={this.props.query}
        variables={this.props.variables}
        render={this.props.render}
      />
    );
  }
}
