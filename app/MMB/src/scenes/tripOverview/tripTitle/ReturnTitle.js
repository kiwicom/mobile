// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import TripTitleText from './TripTitleText';

type Props = {|
  +isOutbound: boolean,
|};

export default function ReturnTitle(props: Props) {
  return (
    <TripTitleText>
      {props.isOutbound ? (
        <Translation id="mmb.trip_overview.trip_title.outbound" />
      ) : (
        <Translation id="mmb.trip_overview.trip_title.inbound" />
      )}
    </TripTitleText>
  );
}
