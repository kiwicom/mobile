// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';
import RNFetchBlob from 'react-native-fetch-blob';

import { TicketDeleteButton } from '../TicketDeleteButton';

jest.mock('react-native-fetch-blob', () => {
  let lsReturn = [];
  return {
    setLsReturn: input => {
      lsReturn = input;
    },
    config: () => ({
      fetch: async () => ({
        path: () => {},
      }),
    }),
    polyfill: () => {},
    fs: {
      dirs: {
        DocumentDir: 'ait',
      },
      exists: async () => true,
      unlink: async () => true,
      ls: async () => lsReturn,
    },
  };
});

const getWrapper = () =>
  renderer.create(<TicketDeleteButton bookingId={123456} isFocused={true} />);

describe('TicketDeleteButton', () => {
  it('renders correctly when booking has local files', () => {
    const wrapper = getWrapper();
    wrapper.getInstance().setState({ hasLocalFiles: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when booking has no local files', () => {
    const wrapper = getWrapper();
    wrapper.getInstance().setState({ hasLocalFiles: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call hasLocalFiles when component is focuesd', () => {
    const Component = new TicketDeleteButton({
      bookingId: 123456,
      isFocused: true,
    });

    const spy = jest.spyOn(Component, 'hasLocalFiles');

    Component.componentDidUpdate({ isFocused: false, bookingId: 123456 });
    expect(spy).toHaveBeenCalled();
  });

  it('should not call hasLocalFiles when component is not focused', () => {
    const Component = new TicketDeleteButton({
      bookingId: 123456,
      isFocused: false,
    });

    const spy = jest.spyOn(Component, 'hasLocalFiles');

    Component.componentDidUpdate({ isFocused: false, bookingId: 123456 });
    expect(spy).not.toHaveBeenCalled();
  });

  it('should not call hasLocalFiles when component is already focused', () => {
    const Component = new TicketDeleteButton({
      bookingId: 123456,
      isFocused: true,
    });

    const spy = jest.spyOn(Component, 'hasLocalFiles');

    Component.componentDidUpdate({ isFocused: true, bookingId: 123456 });
    expect(spy).not.toHaveBeenCalled();
  });

  describe('hasLocalBoardingPasses', () => {
    it('should return false if no files has bookingId in filename', async () => {
      const Component = new TicketDeleteButton({
        bookingId: 123456,
        isFocused: true,
      });

      RNFetchBlob.setLsReturn([
        'test-bookingId:123.pdf',
        'lol-bookingId:321.pdf',
      ]);

      const hasLocalBoardingPasses = await Component.hasLocalBoardingPasses();
      expect(hasLocalBoardingPasses).toEqual(false);
    });

    it('should return true if any file has bookingId in filename', async () => {
      const Component = new TicketDeleteButton({
        bookingId: 123456,
        isFocused: true,
      });

      RNFetchBlob.setLsReturn([
        'test-bookingId:123.pdf',
        'lol-bookingId:321.pdf',
        'lol-bookingId:123456.pdf',
      ]);

      const hasLocalBoardingPasses = await Component.hasLocalBoardingPasses();
      expect(hasLocalBoardingPasses).toEqual(true);
    });
  });
});
