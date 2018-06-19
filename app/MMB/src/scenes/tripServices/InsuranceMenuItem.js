// @flow strict

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { TodoMenuItem } from '@kiwicom/mobile-navigation';

type Props = {||};

export default class InsuranceMenuItem extends React.Component<Props> {
  render = () => {
    const insurance = true; // TODO: fetch from the API (at least 48 hours before departure, no US nationality, CONFIRMED status only)

    if (!insurance) {
      // no lounges available on this trip (do not render the menu item at all)
      return null;
    }

    return (
      <TodoMenuItem
        title={
          <Translation id="mmb.trip_services.general_services.insurance" />
        }
        icon={<TextIcon code="'" />}
      />
    );
  };
}
