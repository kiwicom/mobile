// @flow

import { TransportationMap } from '../TransportationMap';

describe('TransportationMap', () => {
  test('buildWhitelabelURL: it returns the whitelabelURL unchanged when neither markers have been placed', () => {
    // $FlowExpectedError: passing just necessary props
    const transportationMap = new TransportationMap({
      params: {
        location: { lat: 50, lng: 14 },
        whitelabelURL: 'https://some.url.without.params/',
        date: new Date('2018-08-30T14:40:00'),
      },
    });

    expect(transportationMap.buildWhitelabelURL()).toBe(
      'https://some.url.without.params/',
    );
  });
  test('buildWhitelabelURL: it returns the whitelabelURL with correct params when both markers have been placed', () => {
    // $FlowExpectedError: passing just necessary props
    const transportationMap = new TransportationMap({
      params: {
        location: { lat: 50, lng: 14 },
        whitelabelURL: 'https://some.url.without.params/',
        date: new Date('2018-08-30T14:40:00+00:00'),
      },
    });

    transportationMap.state = {
      ...transportationMap.state,
      markers: {
        ...transportationMap.state.markers,
        markerA: {
          latitude: 51,
          longitude: 16,
        },
        markerB: {
          latitude: 51.5,
          longitude: 15.5,
        },
      },
    };

    expect(transportationMap.buildWhitelabelURL()).toBe(
      'https://some.url.without.params/search?utm_source=kiwi&utm_medium=startpart&utm_campaign=mobileappconfpage&pickup=51%2C16&dropoff=51.5%2C15.5&language=en&currency=EUR&date=2018-08-30&time=14:40',
    );
  });
  test('buildWhitelabelURL: it returns the whitelabelURL with correct params when both markers have been placed (without date)', () => {
    // $FlowExpectedError: passing just necessary props
    const transportationMap = new TransportationMap({
      params: {
        location: { lat: 50, lng: 14 },
        whitelabelURL: 'https://some.url.without.params/',
        date: null,
      },
    });

    transportationMap.state = {
      ...transportationMap.state,
      markers: {
        ...transportationMap.state.markers,
        markerA: {
          latitude: 51,
          longitude: 16,
        },
        markerB: {
          latitude: 51.5,
          longitude: 15.5,
        },
      },
    };

    expect(transportationMap.buildWhitelabelURL()).toBe(
      'https://some.url.without.params/search?utm_source=kiwi&utm_medium=startpart&utm_campaign=mobileappconfpage&pickup=51%2C16&dropoff=51.5%2C15.5&language=en&currency=EUR&date=&time=',
    );
  });

  test("componentDidUpdate: it should not set 'disabled' to false if either marker is still not placed", () => {
    const navigation = {
      navigate: jest.fn(),
      setParams: jest.fn(),
      state: {
        params: { disabled: true },
      },
    };
    // $FlowExpectedError: passing just necessary props
    const transportationMap = new TransportationMap({
      navigation,
      params: {
        location: { lat: 50, lng: 14 },
        whitelabelURL: 'https://some.url.without.params/',
        date: new Date('2018-08-30T14:40:00'),
      },
    });

    const spy = jest.spyOn(navigation, 'setParams');

    transportationMap.componentDidUpdate();
    expect(spy).not.toHaveBeenCalled();
  });

  test("componentDidUpdate: it should not set 'disabled' to false if 'disabled' is already false", () => {
    const navigation = {
      navigate: jest.fn(),
      setParams: jest.fn(),
      state: {
        params: { disabled: false },
      },
    };
    // $FlowExpectedError: passing just necessary props
    const transportationMap = new TransportationMap({
      navigation,
      params: {
        location: { lat: 50, lng: 14 },
        whitelabelURL: 'https://some.url.without.params/',
        date: new Date('2018-08-30T14:40:00'),
      },
    });

    const spy = jest.spyOn(navigation, 'setParams');

    transportationMap.componentDidUpdate();
    expect(spy).not.toHaveBeenCalled();
  });

  test("componentDidUpdate: it should set 'disabled' to true if both markers are placed and 'disabled' is still true", () => {
    const navigation = {
      navigate: jest.fn(),
      setParams: jest.fn(),
      state: {
        params: { disabled: true },
      },
    };
    // $FlowExpectedError: passing just necessary props
    const transportationMap = new TransportationMap({
      navigation,
      params: {
        location: { lat: 50, lng: 14 },
        whitelabelURL: 'https://some.url.without.params/',
        date: new Date('2018-08-30T14:40:00'),
      },
    });

    transportationMap.state = {
      ...transportationMap.state,
      markers: {
        ...transportationMap.state.markers,
        markerA: {
          latitude: 51,
          longitude: 16,
        },
        markerB: {
          latitude: 51.5,
          longitude: 15.5,
        },
      },
    };

    const spy = jest.spyOn(navigation, 'setParams');

    transportationMap.componentDidUpdate();
    expect(spy).toHaveBeenCalledWith({ disabled: false });
  });
});
