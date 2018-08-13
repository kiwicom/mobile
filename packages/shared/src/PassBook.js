// @flow

import { NativeModules } from 'react-native';

const noop: (x: *) => void = () => {};
const { addPass = noop } = NativeModules.RNKiwiAppleWalletManager || {};

export default { addPass };
