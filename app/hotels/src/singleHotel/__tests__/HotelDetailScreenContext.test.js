// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from '../HotelDetailScreenContext';

const Child = () => null;

const getWrapper = (guestCount = 4) =>
  renderer
    .create(
      <Provider guestCount={guestCount}>
        <Child />
      </Provider>,
    )
    .getInstance();

describe('HotelDetailScreenContext', () => {
  it('selects and deslects rooms correctly', () => {
    const wrapper = getWrapper();
    wrapper.selectRoom('abc', 2);
    wrapper.selectRoom('abcd', 4);
    expect(wrapper.state.selected.abc).toBe(1);
    expect(wrapper.state.selected.abcd).toBe(1);
    wrapper.selectRoom('abcd', 4);
    expect(wrapper.state.selected.abcd).toBe(2);

    wrapper.deselectRoom('abcd', 4);
    expect(wrapper.state.selected.abcd).toBe(1);
  });

  it('updateSelectedCount', () => {
    const wrapper = getWrapper();
    wrapper.updateSelectedCount('abc', 1, 3);
    expect(wrapper.state.maxPersons).toBe(3);
    expect(wrapper.state.numberOfRooms).toBe(1);

    wrapper.updateSelectedCount('abcd', 1, 2);
    expect(wrapper.state.maxPersons).toBe(5);
    expect(wrapper.state.numberOfRooms).toBe(2);

    wrapper.updateSelectedCount('abcd', -1, -2);
    expect(wrapper.state.maxPersons).toBe(3);
    expect(wrapper.state.numberOfRooms).toBe(1);
  });

  it('getPersonCount', () => {
    const wrapper = getWrapper(2);

    wrapper.setState({ maxPersons: 3 });
    expect(wrapper.getPersonCount()).toBe(2);

    wrapper.setState({ maxPersons: 1 });
    expect(wrapper.getPersonCount()).toBe(1);
  });

  it('resets state', () => {
    const wrapper = getWrapper();
    wrapper.setState({
      selected: {
        abc: 3,
      },
      maxPersons: 5,
      numberOfRooms: 2,
    });

    wrapper.reset();
    expect(wrapper.state.selected).toEqual({});
    expect(wrapper.state.maxPersons).toEqual(0);
    expect(wrapper.state.numberOfRooms).toEqual(0);
    expect(wrapper.state.price).toEqual({
      amount: 0,
      currency: '',
    });
  });
});
