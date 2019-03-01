// @flow strict

import * as React from 'react';
import { FastTrackBanner } from '@kiwicom/react-native-fast-track';

// Enums
import AncillaryServiceType from '../enums/AncillaryServiceType';

// Services
import requester from '../services/requester';

// Components
import NoAncillaryMessage from '../components/NoAncillaryMessage';

type Props = {|
  +serviceName: string,
  +token: string,
  +bookingId: number,
|};

const AncillaryFactory = (props: Props) => {
  const ancillaryProps = {
    bookingId: props.bookingId,
    requester: requester(props.token),
  };

  switch (props.serviceName) {
    case AncillaryServiceType.FAST_TRACK:
      return <FastTrackBanner {...ancillaryProps} />;
    default:
      return <NoAncillaryMessage />;
  }
};

export default AncillaryFactory;
