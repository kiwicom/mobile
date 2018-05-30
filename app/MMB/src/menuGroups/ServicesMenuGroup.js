// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TitledMenuGroup from '../components/menu/TitledMenuGroup';
import MenuItem from '../components/menu/MenuItem';
import BookingDetailContext from '../context/BookingDetailContext';

type PropsWithContext = {|
  ...Props,
  isPastBooking: boolean,
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
      {!this.props.isPastBooking && (
        <MenuItem
          onPress={this.handleOpenFlightServicesSubmenu}
          isActive={
            this.props.activeId === 'mmb.main_menu.services.flight_services'
          }
          icon={<TextIcon code="&#xe049;" />}
          title={<Translation id="mmb.main_menu.services.flight_services" />}
          description={
            <Translation id="mmb.main_menu.services.flight_services.description" />
          }
          testID="flightServices"
        />
      )}

      <MenuItem
        onPress={this.handleOpenTripServicesSubmenu}
        isActive={
          this.props.activeId === 'mmb.main_menu.services.trip_services'
        }
        icon={<TextIcon code="&#xe08a;" />}
        title={<Translation id="mmb.main_menu.services.trip_services" />}
        description={
          <Translation id="mmb.main_menu.services.trip_services.description" />
        }
      />
    </TitledMenuGroup>
  );
}

type Props = {|
  openSubmenu: (activeId: string, menuId: string) => void,
  activeId: string,
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
