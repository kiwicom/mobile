// @flow strict

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { MenuItem } from '@kiwicom/mobile-navigation';

type Props = {||};

export default class InsuranceMenuItem extends React.Component<Props> {
  goToInsurance = () => {
    console.warn('TODO');
  };

  render = () => {
    const insurance = true; // TODO: fetch from the API (at least 48 hours before departure, no US nationality, CONFIRMED status only)

    if (!insurance) {
      // no lounges available on this trip (do not render the menu item at all)
      return null;
    }

    return (
      <MenuItem
        title={
          <Translation id="mmb.trip_services.general_services.insurance" />
        }
        onPress={this.goToInsurance}
        icon={<TextIcon code="'" />}
      />
    );
  };
}
