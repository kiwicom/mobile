// @flow strict

import { type NavigationType } from '@kiwicom/mobile-navigation';

export type NavigationProps = $ReadOnly<{|
  navigation: NavigationType,
  language: string,
  currency: string,
|}>;
