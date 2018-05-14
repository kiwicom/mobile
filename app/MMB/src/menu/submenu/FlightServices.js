// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { ScrollView } from 'react-native';
import { TextIcon } from '@kiwicom/mobile-shared';
import {
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import TitledMenuGroup from '../components/TitledMenuGroup';
import MenuItem from '../components/MenuItem';
import Deeplink from '../Deeplink';

type Props = {|
  bookingId: string,
  navigation: NavigationType,
|};

export default class FlightServices extends React.Component<Props> {
  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate({
      routeName: key,
      key: `key-${key}`,
      params: {
        bookingId: this.props.bookingId,
      },
    });
  };

  handleOpenBaggage = () => {
    this.navigate('mmb.flight_services.checked_baggage');
  };

  handleOpenAllocatedSeating = () => {
    this.navigate('mmb.flight_services.allocated_seating');
  };

  handleOpenSportsEquipment = () => {
    this.navigate('mmb.flight_services.sports_equipment');
  };

  handleOpenMusicalEquipment = () => {
    this.navigate('mmb.flight_services.musical_equipment');
  };

  handleOpenSpecialAssitance = () => {
    this.navigate('mmb.flight_services.special_assistance');
  };

  handleOpenPetPassengers = () => {
    this.navigate('mmb.flight_services.pets');
  };

  render = () => (
    <ScrollView>
      <TitledMenuGroup title={<Translation id="mmb.flight_services.title" />}>
        <MenuItem
          title={<Translation id="mmb.flight_services.additional_baggage" />}
          isActive={false}
          onPress={this.handleOpenBaggage}
          icon={<TextIcon code="&#xe071;" />}
          key="lol"
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.allocated_seating" />}
          isActive={false}
          onPress={this.handleOpenAllocatedSeating}
          icon={<TextIcon code="&#xe02a;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.sports_equipment" />}
          isActive={false}
          onPress={this.handleOpenSportsEquipment}
          icon={<TextIcon code="&#xe089;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.musical_equipment" />}
          isActive={false}
          onPress={this.handleOpenMusicalEquipment}
          icon={<TextIcon code="&#xe086;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.special_assistance" />}
          isActive={false}
          onPress={this.handleOpenSpecialAssitance}
          icon={<TextIcon code="&#xe088;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.traveling_with_pets" />}
          isActive={false}
          onPress={this.handleOpenPetPassengers}
          icon={<TextIcon code="&#xe043;" />}
        />
      </TitledMenuGroup>
    </ScrollView>
  );
}

type SubmenuProps = {|
  bookingId: string,
|};

export const FlightServicesSubmenuItems = {
  'mmb.flight_services.checked_baggage': {
    screen: function OpenCheckedBaggage({ bookingId }: SubmenuProps) {
      return <Deeplink to="BAGS" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.allocated_seating': {
    screen: function OpenAllocatedSeating({ bookingId }: SubmenuProps) {
      return <Deeplink to="SEATING" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.sports_equipment': {
    screen: function OpenSportsEquipment({ bookingId }: SubmenuProps) {
      return <Deeplink to="SPORT_EQUIPMENT" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.musical_equipment': {
    screen: function OpenMusicalEquipment({ bookingId }: SubmenuProps) {
      return <Deeplink to="MUSICAL_EQUIPMENT" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.special_assistance': {
    screen: function OpenSpecialAssistance({ bookingId }: SubmenuProps) {
      return <Deeplink to="ASSISTANCE" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.pets': {
    screen: function OpenPetPassengers({ bookingId }: SubmenuProps) {
      return <Deeplink to="PETS" bookingID={bookingId} />;
    },
  },
};
