// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { MenuItem, TitledMenuGroup } from '@kiwicom/mobile-navigation';

import PassengerMenuDetail from './PassengerMenuDetail';
import type { PassengerMenuGroup as Boooking } from './__generated__/PassengerMenuGroup.graphql';

type Props = {|
  +openSubmenu: (activeId: string, menuId: string) => void,
  +activeId: string,
  +data: Boooking,
|};

class PassengerMenuGroup extends React.Component<Props> {
  handleOnPassengerDetailPress = () => {
    this.props.openSubmenu(
      'mmb.main_menu.passengers.passenger_details',
      'mmb.passenger_detail',
    );
  };

  render = () => (
    <React.Fragment>
      <TitledMenuGroup title={<Translation id="mmb.main_menu.passengers" />}>
        <MenuItem
          onPress={this.handleOnPassengerDetailPress}
          title={<Translation id="mmb.main_menu.details" />}
          isActive={
            this.props.activeId === 'mmb.main_menu.passengers.passenger_details'
          }
          icon={<TextIcon code="&#xe087;" />}
        />
      </TitledMenuGroup>
      <PassengerMenuDetail data={this.props.data} />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  PassengerMenuGroup,
  graphql`
    fragment PassengerMenuGroup on Booking {
      ...PassengerMenuDetail
    }
  `,
);
