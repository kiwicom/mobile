// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { MenuItem, TitledMenuGroup } from '@kiwicom/mobile-navigation';

import BookingDetailContext from '../../context/BookingDetailContext';
import FlightServices from './FlightServices';

type PropsWithContext = {|
  ...Props,
  +isPastBooking: boolean,
|};

export class ServicesMenuGroup extends React.Component<PropsWithContext> {
  handleOpenFlightServicesSubmenu = () => {
    this.props.openSubmenu(
      'mmb.main_menu.services.flight_services',
      'mmb.flight_services',
    );
  };

  handleOpenTripServicesSubmenu = () => {
    this.props.openSubmenu(
      'mmb.main_menu.services.trip_services',
      'mmb.trip_services',
    );
  };

  render = () => (
    <TitledMenuGroup title={<Translation id="mmb.main_menu.services" />}>
      <FlightServices
        onPress={this.handleOpenFlightServicesSubmenu}
        isActive={
          this.props.activeId === 'mmb.main_menu.services.flight_services'
        }
        data={this.props.data}
      />

      <MenuItem
        onPress={this.handleOpenTripServicesSubmenu}
        isActive={
          this.props.activeId === 'mmb.main_menu.services.trip_services'
        }
        icon={<TextIcon code="r" />}
        title={<Translation id="mmb.main_menu.services.trip_services" />}
        description={
          <Translation id="mmb.main_menu.services.trip_services.description" />
        }
      />
    </TitledMenuGroup>
  );
}

type Props = {|
  +openSubmenu: (activeId: string, menuId: string) => void,
  +activeId: string,
  +data: Object,
|};

export default function ServicesMenuGroupWithContext(props: Props) {
  return (
    <BookingDetailContext.Consumer>
      {({ isPastBooking }) => (
        <ServicesMenuGroup {...props} isPastBooking={isPastBooking} />
      )}
    </BookingDetailContext.Consumer>
  );
}
