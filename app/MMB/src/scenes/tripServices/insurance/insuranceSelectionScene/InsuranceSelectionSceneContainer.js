// @flow

import * as React from 'react';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';

import BookingDetailContext from '../../../../context/BookingDetailContext';
import InsuranceSelectionScene from './InsuranceSelectionScene';
import type { InsuranceSelectionSceneQueryResponse } from './__generated__/InsuranceSelectionSceneContainerQuery.graphql';

export default class InsuranceSelectionSceneContainer extends React.Component<{}> {
  renderInnerComponent = (response: InsuranceSelectionSceneQueryResponse) => {
    return <InsuranceSelectionScene data={response} />;
  };

  render = () => {
    return (
      <BookingDetailContext.Consumer>
        {({ bookingId }) => (
          <PrivateApiRenderer
            render={this.renderInnerComponent}
            query={graphql`
              query InsuranceSelectionSceneContainerQuery($bookingId: ID!) {
                node(id: $bookingId) {
                  ... on BookingInterface {
                    ...VariantButtons
                  }
                }
              }
            `}
            variables={{
              bookingId: bookingId,
            }}
          />
        )}
      </BookingDetailContext.Consumer>
    );
  };
}
