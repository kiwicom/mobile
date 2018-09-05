// @flow strict

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import { type NavigationType, HeaderTitle } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import BookingDetailContext from '../../../../context/BookingDetailContext';
import type { InsuranceOverviewSceneQueryResponse } from './__generated__/InsuranceOverviewSceneContainerQuery.graphql';
import InsuranceOverviewScene from './InsuranceOverviewScene';

type ContainerProps = {|
  +navigation: NavigationType,
|};

export default class InsuranceOverviewSceneContainer extends React.Component<
  ContainerProps,
> {
  static navigationOptions = () => {
    return {
      headerTitle: function TripServicesHeaderTitle() {
        return (
          <HeaderTitle>
            <Translation id="mmb.trip_services.insurance.title" />
          </HeaderTitle>
        );
      },
    };
  };

  renderInnerComponent = (response: InsuranceOverviewSceneQueryResponse) => {
    return (
      <InsuranceOverviewScene
        data={response}
        navigation={this.props.navigation}
      />
    );
  };

  render = () => {
    return (
      <BookingDetailContext.Consumer>
        {({ bookingId, authToken }) => (
          <PublicApiRenderer
            render={this.renderInnerComponent}
            query={graphql`
              query InsuranceOverviewSceneContainerQuery(
                $bookingId: Int!
                $authToken: String!
              ) {
                singleBooking(id: $bookingId, authToken: $authToken) {
                  ... on BookingInterface {
                    ...DestinationImage
                    ...TripInfo
                    passengers {
                      fullName
                      title
                      birthday
                      databaseId
                      insuranceType
                    }
                    insurancePrices {
                      insuranceType
                      price {
                        amount
                        currency
                      }
                    }
                  }
                }
              }
            `}
            variables={{
              bookingId,
              authToken,
            }}
          />
        )}
      </BookingDetailContext.Consumer>
    );
  };
}
