// @flow
/* eslint-disable no-unused-vars */

import type { Navigation } from '../../../../types/Navigation';

type Parameters = Object;

export default ({
  navigate: (screen: string, parameters?: Parameters) => {},
  state: { params: {} },
  setParams: (newParameters: Parameters) => {},
  goBack: () => {},
}: Navigation);
