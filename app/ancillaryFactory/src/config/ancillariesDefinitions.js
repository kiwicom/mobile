// @flow

import { FastTrackBanner } from '@kiwicom/react-native-fast-track';

export type AncillaryDefinition = {
  service: string,
  renderComponent: Function,
};

export const ancillariesDefinitions = Object.freeze({
  FAST_TRACK: {
    service: 'fast_track',
    renderComponent: FastTrackBanner,
  },
});
