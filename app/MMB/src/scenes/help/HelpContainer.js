// @flow

import * as React from 'react';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';
import { WebView } from '@kiwicom/mobile-shared';

import type { HelpQueryContainerResponse } from './__generated__/HelpContainerQuery.graphql';
import Help from './Help';

type Props = {||};

export default class HelpContainer extends React.Component<Props> {
  renderInner = (renderProps: HelpQueryContainerResponse) => (
    <Help data={renderProps.customerSupportNumber} />
  );

  render() {
    return (
      <PublicApiRenderer
        query={graphql`
          query HelpContainerQuery {
            customerSupportNumber {
              ...Help
            }
          }
        `}
        render={this.renderInner}
      />
    );
  }
}

export const HelpSubmenuItems = {
  'mmb.help.help': {
    screen: function HelpSubmenuHelp() {
      return (
        <WebView
          source={{
            uri: 'https://www.kiwi.com/helpcenter?ui=webview&faqContext=manage',
          }}
        />
      );
    },
  },
};
