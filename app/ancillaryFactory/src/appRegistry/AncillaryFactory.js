// @flow strict

import * as React from 'react';
import CodePush from 'react-native-code-push';
import { FastTrackBanner } from '@kiwicom/react-native-fast-track';

// Config
import { DEPLOYMENT_KEY } from '../config/codepushConfig';

// Enums
import AncillaryServiceType from '../enums/AncillaryServiceType';

// Services
import requester from '../services/requester';

// Components
import NoAncillaryMessage from '../components/NoAncillaryMessage';

// CodePush Options
const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};

type Props = {|
  +service: string,
  +token: string,
  +bookingId: number,
|};

class AncillaryFactory extends React.Component<Props> {
  componentDidMount() {
    CodePush.sync({
      deploymentKey: DEPLOYMENT_KEY,
      updateDialog: false,
      installMode: CodePush.InstallMode.IMMEDIATE,
    });
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

export default CodePush(codePushOptions)(AncillaryFactory);
