// @flow strict

export type ThirdPartyAncillariesOrderResponse = {
  attachments: {
    ancillaries_document: { url: string },
    fast_track_document: { url: string },
  },
};
