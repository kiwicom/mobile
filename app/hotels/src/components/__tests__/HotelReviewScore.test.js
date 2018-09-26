// @flow

import { defaultTokens } from '@kiwicom/mobile-orbit';

import { HotelReviewScore } from '../HotelReviewScore';

let HRS;

beforeEach(() => {
  // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
  HRS = new HotelReviewScore({ hotel: { review: undefined } });
});

describe('formatScore', () => {
  it('returns correctly formatted score', () => {
    expect(HRS.formatScore(1)).toBe('1,0');
    expect(HRS.formatScore(1.0)).toBe('1,0');
    expect(HRS.formatScore(1.2)).toBe('1,2');
    expect(HRS.formatScore(1.25)).toBe('1,3');
  });
});

describe('calculateColor', () => {
  it('returns correct score color', () => {
    const RED = defaultTokens.paletteRedNormal;
    const ORANGE = defaultTokens.paletteOrangeNormal;
    const GREEN = defaultTokens.paletteGreenNormal;

    const RED_BACKGROUND = defaultTokens.paletteRedLight;
    const ORANGE_BACKGROUND = defaultTokens.paletteOrangeLight;
    const GREEN_BACKGROUND = defaultTokens.paletteGreenLight;

    expect(HRS.calculateColor(-1)).toEqual({
      backgroundColor: '',
      color: '',
    });
    expect(HRS.calculateColor(0)).toEqual({
      backgroundColor: RED_BACKGROUND,
      color: RED,
    });
    expect(HRS.calculateColor(3)).toEqual({
      backgroundColor: ORANGE_BACKGROUND,
      color: ORANGE,
    });
    expect(HRS.calculateColor(7)).toEqual({
      backgroundColor: ORANGE_BACKGROUND,
      color: ORANGE,
    });
    expect(HRS.calculateColor(10)).toEqual({
      backgroundColor: GREEN_BACKGROUND,
      color: GREEN,
    });
    expect(HRS.calculateColor(11)).toEqual({
      backgroundColor: '',
      color: '',
    });
  });
});

describe('render', () => {
  it('returns null of falsy score values', () => {
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    HRS = new HotelReviewScore({ hotel: { review: { score: 0 } } });
    expect(HRS.render()).toBe(null);

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    HRS = new HotelReviewScore({ hotel: { review: { score: null } } });
    expect(HRS.render()).toBe(null);

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    HRS = new HotelReviewScore({ hotel: { review: { score: undefined } } });
    expect(HRS.render()).toBe(null);

    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    HRS = new HotelReviewScore({ hotel: { review: { score: 1 } } });
    expect(HRS.render()).toBeInstanceOf(Object); // actual component
  });
});
