// @flow

import Device from '../Device';

it('orientation is portrait', () => {
  const device = Device.isPortrait({ height: 500, width: 200 });
  expect(device).toBeTruthy();
});

it('orientation is landscape', () => {
  const device = Device.isLandscape({ height: 200, width: 500 });
  expect(device).toBeTruthy();
});

it('layout is wide', () => {
  const device = Device.isWideLayout({ height: 500, width: 700 });
  expect(device).toBeTruthy();
});

it('layout is narrow', () => {
  const device = Device.isNarrowLayout({ height: 200, width: 500 });
  expect(device).toBeTruthy();
});
