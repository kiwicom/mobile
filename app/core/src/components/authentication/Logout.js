// @flow

import * as React from 'react';
import { LinkButton } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

const VoidLogoutAction = () => console.warn('TODO: Logout');

export default function Logout() {
  return (
    <LinkButton
      onPress={VoidLogoutAction}
      title={<Translation id="core.authentication.logout" />}
    />
  );
}
