// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import WalletText from './WalletText';
import WalletContext from '../../context/WalletContext';

export default function Passenger() {
  return (
    <WalletContext.Consumer>
      {({ selectedSegment }) => {
        if (selectedSegment === null) {
          return null;
        }
        return (
          <WalletText
            label={
              <Translation id="mmb.apple_wallet.apple_wallet_scene.passenger" />
            }
            text={
              <Translation passThrough={selectedSegment.passengerName || ''} />
            }
          />
        );
      }}
    </WalletContext.Consumer>
  );
}
