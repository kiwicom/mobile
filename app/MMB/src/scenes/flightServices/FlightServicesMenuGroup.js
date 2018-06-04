// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon, RefreshableScrollView } from '@kiwicom/mobile-shared';
import {
  type RouteNamesType,
  type NavigationType,
  TitledMenuGroup,
} from '@kiwicom/mobile-navigation';
import { withNavigation } from 'react-navigation';
import {
  createRefetchContainer,
  graphql,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import idx from 'idx';

import FlightServiceMenuItem from './FlightServiceMenuItem';
import type { FlightServicesMenuGroup_bookedServices } from './__generated__/FlightServicesMenuGroup_bookedServices.graphql';

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
    icon: <TextIcon code="&#xe071;" />,
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
  bookedServices: FlightServicesMenuGroup_bookedServices,
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
    this.props.navigation.navigate({
      routeName: key,
      key: `key-${key}`,
      params: {
        bookingId: idx(this.props.bookedServices, _ => _.databaseId),
      },
    });
  };

  refetch = () => {
    this.setState({ isLoading: true });
    this.props.relay.refetch(
      { id: idx(this.props.bookedServices, _ => _.databaseId) },
      null,
      () => {
        this.setState({ isLoading: false });
      },
    );
  };

  /**
   * A service is considered to be ordered if it is a booked service
   * and status is not 'OPEN'.
   */
  getOrderedAndNotOrderedServices = () => {
    const bookedServices =
      idx(this.props.bookedServices, _ => _.bookedServices) || [];

    const orderedCategories = bookedServices
      .filter(item => idx(item, _ => _.status) !== 'OPEN')
      .map(item => idx(item, _ => _.category));

    const ordered = offeredFlightServices.filter(item =>
      orderedCategories.includes(item.key),
    );

    const rest = offeredFlightServices.filter(
      item => !orderedCategories.includes(item.key),
    );

    return { ordered, rest };
  };

  render = () => {
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
            title={<Translation id="mmb.flight_services.title" />}
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
  };
}

export default createRefetchContainer(
  withNavigation(FlightServicesMenuGroup),
  graphql`
    fragment FlightServicesMenuGroup_bookedServices on Booking {
      databaseId
      bookedServices {
        category
        status
      }
    }
  `,
  graphql`
    query FlightServicesMenuGroupQuery($id: ID!) {
      booking(id: $id) {
        ...FlightServicesMenuGroup_bookedServices
      }
    }
  `,
);
