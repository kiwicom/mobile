// @flow strict

import * as React from 'react';
import { WithNativeNavigation } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

// This will be prop types passed from native app
type Props = {||};

class FastTrackBanner extends React.Component<Props> {
  render() {
    return <Translation passThrough="Put code here" />;
  }
}

// With navigation solves problem with swipe gestures, back button
// And navigation between native app and RN app.
// I am not 100% sure you need it if you will just run as a fragment.
// You can experiment without to to verify
export default WithNativeNavigation(FastTrackBanner, 'FastTrackBanner');
