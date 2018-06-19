// @flow strict

import { CarRentalMenuItem } from '../CarRentalMenuItem';

it('adds correct parameters to the URL', () => {
  const Component = new CarRentalMenuItem();
  expect(Component.buildWhitelabelURL('MOCKED')).toBe(
    'MOCKED?adplat=mobileapp_ios&forceMobile=true',
  );
});

it('appends parameters correctly', () => {
  const Component = new CarRentalMenuItem();
  expect(Component.buildWhitelabelURL('MOCKED?test=true')).toBe(
    'MOCKED?test=true&adplat=mobileapp_ios&forceMobile=true',
  );
});
