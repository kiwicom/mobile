// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { ScrollView } from 'react-native';
import { TextIcon } from '@kiwicom/mobile-shared';
import {
  TitledMenuGroup,
  MenuItem,
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import Deeplink from '../components/Deeplink';

type Props = {|
  +navigation: NavigationType,
|};

export default class FlightServices extends React.Component<Props> {
  navigate = (key: RouteNamesType) => {
    this.props.navigation.navigate(key);
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
      <TitledMenuGroup
        title={<Translation id="mmb.flight_services.title_services" />}
      >
        <MenuItem
          title={<Translation id="mmb.flight_services.additional_baggage" />}
          onPress={this.handleOpenBaggage}
          icon={<TextIcon code="&#xe071;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.allocated_seating" />}
          onPress={this.handleOpenAllocatedSeating}
          icon={<TextIcon code="&#xe02a;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.sports_equipment" />}
          onPress={this.handleOpenSportsEquipment}
          icon={<TextIcon code="&#xe089;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.musical_equipment" />}
          onPress={this.handleOpenMusicalEquipment}
          icon={<TextIcon code="&#xe086;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.special_assistance" />}
          onPress={this.handleOpenSpecialAssitance}
          icon={<TextIcon code="&#xe088;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.traveling_with_pets" />}
          onPress={this.handleOpenPetPassengers}
          icon={<TextIcon code="&#xe043;" />}
        />
      </TitledMenuGroup>
    </ScrollView>
  );
}

export const FlightServicesSubmenuItems = {
  'mmb.flight_services.checked_baggage': {
    screen: function OpenCheckedBaggage() {
      return <Deeplink to="BAGS" />;
    },
  },
  'mmb.flight_services.allocated_seating': {
    screen: function OpenAllocatedSeating() {
      return <Deeplink to="SEATING" />;
    },
  },
  'mmb.flight_services.sports_equipment': {
    screen: function OpenSportsEquipment() {
      return <Deeplink to="SPORT_EQUIPMENT" />;
    },
  },
  'mmb.flight_services.musical_equipment': {
    screen: function OpenMusicalEquipment() {
      return <Deeplink to="MUSICAL_EQUIPMENT" />;
    },
  },
  'mmb.flight_services.special_assistance': {
    screen: function OpenSpecialAssistance() {
      return <Deeplink to="ASSISTANCE" />;
    },
  },
  'mmb.flight_services.pets': {
    screen: function OpenPetPassengers() {
      return <Deeplink to="PETS" />;
    },
  },
};
