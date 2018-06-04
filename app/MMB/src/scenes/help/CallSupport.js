// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TitledMenuGroup } from '@kiwicom/mobile-navigation';

import CallMenuItem from './CallMenuItem';

export default function CallSupport() {
  return (
    <ScrollView>
      {/* TODO: only one number based on locale of the device */}

      <TitledMenuGroup
        title={<Translation id="mmb.support.phone.all_numbers" />}
      >
        <CallMenuItem
          title={<Translation passThrough="English (TODO)" />} // TODO
          description={<Translation passThrough="Mon-Fri 9am - 5 pm CEST" />} // TODO
        />
        <CallMenuItem
          title={<Translation passThrough="English (TODO)" />} // TODO
          description={<Translation passThrough="Mon-Fri 9am - 5 pm CEST" />} // TODO
        />
      </TitledMenuGroup>
    </ScrollView>
  );
}
