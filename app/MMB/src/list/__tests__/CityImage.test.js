// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import CityImage from '../CityImage';

const date = new Date(1);

it('renders with type return and status refunded', () => {
  PlaygroundRenderer.render(
    <CityImage
      imageUrl="https:/images.kiwi.com/photos/600x330/oslo_no.jpg"
      bookingId="54134543"
      departureCity="Barcelona"
      arrivalCity="Oslo"
      date={date}
      type="RETURN"
      status="REFUNDED"
    />,
  );
});

it('renders with type one way ans status confirmed', () => {
  PlaygroundRenderer.render(
    <CityImage
      imageUrl="https:/images.kiwi.com/photos/600x330/tromso_no.jpg"
      bookingId="54134543"
      departureCity="Barcelona"
      arrivalCity="Tromsø"
      date={date}
      type="ONE_WAY"
      status="CONFIRMED"
    />,
  );
});

it('renders with type multi city and status closed', () => {
  PlaygroundRenderer.render(
    <CityImage
      imageUrl="https:/images.kiwi.com/photos/600x330/bergen_no.jpg"
      bookingId="54134543"
      departureCity="Barcelona"
      arrivalCity="Bergen"
      date={date}
      type="MULTICITY"
      status="CLOSED"
    />,
  );
});
