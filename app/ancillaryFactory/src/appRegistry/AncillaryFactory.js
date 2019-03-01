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
  +service: string,
  +token: string,
  +bookingId: number,
|};

class AncillaryFactory extends React.Component<Props> {
  componentDidMount() {
    // TODO: CodePush sync
  }

  render() {
    const ancillaryProps = {
      bookingId: this.props.bookingId,
      requester: requester(this.props.token),
    };

    switch (this.props.service) {
      case AncillaryServiceType.FAST_TRACK:
        return <FastTrackBanner {...ancillaryProps} />;
      default:
        return <NoAncillaryMessage />;
    }
  }
}

export default AncillaryFactory;
