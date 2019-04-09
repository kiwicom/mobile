// @flow

import * as React from 'react';
import { LinkButton, Translation } from '@kiwicom/mobile-shared';

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
