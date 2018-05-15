// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { ScrollView } from 'react-native';
import { TextIcon } from '@kiwicom/mobile-shared';

import TitledMenuGroup from '../components/menu/TitledMenuGroup';
import MenuItem from '../components/menu/MenuItem';

const VoidAction = () => {
  console.warn('TODO');
};

export default class TripServices extends React.Component<{||}> {
  render = () => (
    <ScrollView>
      <TitledMenuGroup
        title={<Translation id="mmb.trip_services.ordered_services" />}
      >
        <MenuItem
          title={
            <Translation id="mmb.trip_services.general_services.insurance" />
          }
          onPress={VoidAction}
          icon={<TextIcon code="'" />}
        />
      </TitledMenuGroup>

      <TitledMenuGroup
        title={<Translation id="mmb.trip_services.general_services" />}
      >
        <MenuItem
          title={
            <Translation id="mmb.trip_services.general_services.insurance" />
          }
          onPress={VoidAction}
          icon={<TextIcon code="'" />}
        />
      </TitledMenuGroup>

      <TitledMenuGroup
        title={<Translation id="mmb.trip_services.local_services" />}
      >
        <MenuItem
          title={
            <Translation id="mmb.trip_services.local_services.car_rental" />
          }
          onPress={VoidAction}
          icon={<TextIcon code="&#xe03a;" />}
        />
        <MenuItem
          title={<Translation id="mmb.trip_services.local_services.hotel" />}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe029;" />}
        />
        <MenuItem
          title={<Translation id="mmb.trip_services.local_services.lounge" />}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe04e;" />}
        />
        <MenuItem
          title={<Translation id="mmb.trip_services.local_services.parking" />}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe03e;" />}
        />
        <MenuItem
          title={
            <Translation id="mmb.trip_services.local_services.transportation" />
          }
          onPress={VoidAction}
          icon={<TextIcon code="<" />} // FIXME: icon?
        />
      </TitledMenuGroup>
    </ScrollView>
  );
}
