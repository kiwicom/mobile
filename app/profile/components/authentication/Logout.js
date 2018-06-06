// @flow

import * as React from 'react';
import { LinkButton } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +onLogout: () => void,
|};

export default function Logout(props: Props) {
  return (
    <LinkButton
      onPress={props.onLogout}
      title={<Translation id="core.authentication.logout" />}
    />
  );
}
