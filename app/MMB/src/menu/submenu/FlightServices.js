// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { ScrollView } from 'react-native';
import { TextIcon } from '@kiwicom/mobile-shared';

import TitledMenuGroup from '../components/TitledMenuGroup';
import MenuItem from '../components/MenuItem';

type Props = {||};

const VoidAction = () => {
  console.warn('TODO');
};

export default class FlightServices extends React.Component<Props> {
  render = () => (
    <ScrollView>
      <TitledMenuGroup title={<Translation id="mmb.flight_services.title" />}>
        <MenuItem
          title={<Translation id="mmb.flight_services.additional_baggage" />}
          isActive={false}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe071;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.allocated_seating" />}
          isActive={false}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe02a;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.sports_equipment" />}
          isActive={false}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe089;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.musical_equipment" />}
          isActive={false}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe086;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.special_assistance" />}
          isActive={false}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe088;" />}
        />
        <MenuItem
          title={<Translation id="mmb.flight_services.traveling_with_pets" />}
          isActive={false}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe043;" />}
        />
      </TitledMenuGroup>
    </ScrollView>
  );
}
