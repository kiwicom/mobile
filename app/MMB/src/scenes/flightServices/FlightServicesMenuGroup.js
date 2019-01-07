// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon, RefreshableScrollView } from '@kiwicom/mobile-shared';
import {
  type RouteNamesType,
  type NavigationType,
  TitledMenuGroup,
  withNavigation,
} from '@kiwicom/mobile-navigation';
import {
  createRefetchContainer,
  graphql,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';

import FlightServiceMenuItem from './FlightServiceMenuItem';
import type { FlightServicesMenuGroup_bookedServices as FlightServicesMenuGroupType } from './__generated__/FlightServicesMenuGroup_bookedServices.graphql';

type OfferedFlightServicesType = {|
  key: string,
  title: React.Element<typeof Translation>,
  routeName: RouteNamesType,
  icon: React.Element<typeof TextIcon>,
|};

const offeredFlightServices: OfferedFlightServicesType[] = [
  {
    key: 'BAGS',
    title: <Translation id="mmb.flight_services.additional_baggage" />,
    routeName: 'mmb.flight_services.checked_baggage',
    icon: <TextIcon code="h" />,
  },
  {
    key: 'ALLOCATED_SEATING',
    title: <Translation id="mmb.flight_services.allocated_seating" />,
    routeName: 'mmb.flight_services.allocated_seating',
    icon: <TextIcon code="&#xe02a;" />,
  },
  {
    key: 'SPORTS_EQUIPMENT',
    title: <Translation id="mmb.flight_services.sports_equipment" />,
    routeName: 'mmb.flight_services.sports_equipment',
    icon: <TextIcon code="&#xe089;" />,
  },
  {
    key: 'MUSICAL_EQUIPMENT',
    title: <Translation id="mmb.flight_services.musical_equipment" />,
    routeName: 'mmb.flight_services.musical_equipment',
    icon: <TextIcon code="&#xe086;" />,
  },
  {
    key: 'SPECIAL_ASSISTANCE',
    title: <Translation id="mmb.flight_services.special_assistance" />,
    routeName: 'mmb.flight_services.special_assistance',
    icon: <TextIcon code="&#xe088;" />,
  },
  {
    key: 'TRAVELLING_WITH_PETS',
    title: <Translation id="mmb.flight_services.traveling_with_pets" />,
    routeName: 'mmb.flight_services.pets',
    icon: <TextIcon code="&#xe043;" />,
  },
];

type Props = {|
  bookingId: string,
  id: string,
  navigation: NavigationType,
  bookedServices: FlightServicesMenuGroupType,
  relay: RelayRefetchProp,
|};

type State = {|
  isLoading: boolean,
|};

export class FlightServicesMenuGroup extends React.Component<Props, State> {
  state = {
    isLoading: false,
  };

  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate(key, {
      bookingId: this.props.bookedServices.databaseId,
    });
  };

  refetch = () => {
    this.setState({ isLoading: true });
    this.props.relay.refetch(
      {
        id: this.props.bookedServices.databaseId,
        authToken: this.props.bookedServices.authToken,
      },
      null,
      () => {
        this.setState({ isLoading: false });
      },
      {
        force: true,
      },
    );
  };

  /**
   * A service is considered to be ordered if it is a booked service
   * and status is not 'OPEN'.
   */
  getOrderedAndNotOrderedServices = () => {
    const bookedServices = this.props.bookedServices.bookedServices ?? [];

    const orderedCategories = bookedServices
      .filter(item => item?.status !== 'OPEN')
      .map(item => item?.category);

    return offeredFlightServices.reduce(
      (acc, currentValue) => {
        const includesKey = orderedCategories.includes(currentValue.key);
        if (includesKey) {
          return {
            ordered: [...acc.ordered, currentValue],
            rest: acc.rest,
          };
        }

        return {
          ordered: acc.ordered,
          rest: [...acc.rest, currentValue],
        };
      },
      { ordered: [], rest: [] },
    );
  };

  render() {
    const { ordered, rest } = this.getOrderedAndNotOrderedServices();
    return (
      <RefreshableScrollView
        onRefresh={this.refetch}
        refreshing={this.state.isLoading}
      >
        {ordered.length > 0 && (
          <TitledMenuGroup
            title={<Translation id="mmb.flight_services.title_ordered" />}
          >
            {ordered.map(service => (
              <FlightServiceMenuItem
                key={service.key}
                title={service.title}
                routeName={service.routeName}
                icon={service.icon}
                navigate={this.navigate}
              />
            ))}
          </TitledMenuGroup>
        )}
        {rest.length > 0 && (
          <TitledMenuGroup
            title={<Translation id="mmb.flight_services.title_services" />}
          >
            {rest.map(service => (
              <FlightServiceMenuItem
                key={service.key}
                title={service.title}
                routeName={service.routeName}
                icon={service.icon}
                navigate={this.navigate}
              />
            ))}
          </TitledMenuGroup>
        )}
      </RefreshableScrollView>
    );
  }
}

export default createRefetchContainer(
  withNavigation(FlightServicesMenuGroup),
  graphql`
    fragment FlightServicesMenuGroup_bookedServices on BookingInterface {
      databaseId
      authToken
      bookedServices {
        category
        status
      }
    }
  `,
  graphql`
    query FlightServicesMenuGroupQuery($id: Int!, $authToken: String!) {
      singleBooking(id: $id, authToken: $authToken) {
        ... on BookingInterface {
          ...FlightServicesMenuGroup_bookedServices
        }
      }
    }
  `,
);
