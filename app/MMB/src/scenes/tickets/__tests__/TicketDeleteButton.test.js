// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';

import { TicketDeleteButton } from '../TicketDeleteButton';

jest.mock('rn-fetch-blob');

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
});
