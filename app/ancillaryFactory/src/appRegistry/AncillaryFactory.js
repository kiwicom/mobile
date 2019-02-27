// @flow strict

import * as React from 'react';
import { FastTrackBanner } from '@kiwicom/react-native-fast-track';

import AncillaryServiceType from '../enums/AncillaryServiceType';
import NoAncillaryMessage from '../components/NoAncillaryMessage';

type Props = {|
  +serviceName: string,
  +bookingId: number,
|};

const AncillaryFactory = (props: Props) => {
  switch (props.serviceName) {
    case AncillaryServiceType.FAST_TRACK:
      return <FastTrackBanner bookingId={props.bookingId} />;
    default:
      return <NoAncillaryMessage />;
  }
};

export default AncillaryFactory;
