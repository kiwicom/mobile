// @flow strict

import CaseTransform from '../CaseTransform';

describe('uppercase', () => {
  const transformation = 'uppercase';

  it('works with normal text', () => {
    expect(CaseTransform('text', transformation)).toBe('TEXT');
  });

  it('works with accents', () => {
    expect(CaseTransform('ěščřžýáíéúü', transformation)).toBe('ĚŠČŘŽÝÁÍÉÚÜ');
  });
});

describe('lowercase', () => {
  const transformation = 'lowercase';

  it('works with normal text', () => {
    expect(CaseTransform('TEXT', transformation)).toBe('text');
  });

  it('works with accents', () => {
    expect(CaseTransform('ĚŠČŘŽÝÁÍÉÚÜ', transformation)).toBe('ěščřžýáíéúü');
  });
});

it('works with unknown transformation', () => {
  // $FlowExpectedError: 'unknown' is not allowed transformation by Flow
  expect(CaseTransform('TexT', 'unknown')).toBe('TexT');
});
