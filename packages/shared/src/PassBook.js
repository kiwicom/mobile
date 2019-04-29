// @flow

import { NativeModules } from 'react-native';
import { noop } from '@kiwicom/mobile-utils';

const { addPass = noop } = NativeModules.RNKiwiAppleWalletManager || {};

const PassBook = { addPass };

export default PassBook;
