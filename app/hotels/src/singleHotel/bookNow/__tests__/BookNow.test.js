// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import { Alert } from '@kiwicom/mobile-localization';

import { BookNow } from '../BookNow';
import { HotelsContext } from '../../../HotelsContext';

const renderer = new ShallowRenderer();
const $refType: any = null;
const navigation = {
  navigate: jest.fn(),
  setParams: jest.fn(),
  goBack: jest.fn(),
  state: {
    params: {},
  },
  addListener: jest.fn(() => ({
    remove: jest.fn(),
  })),
  getParam: jest.fn(),
};

it('renders without crashing', () => {
  const props = {
    navigation,
    maxPersons: 2,
    amount: '0',
    rooms: {
      availableRooms: [
        {
          id: '1',
          selectedCount: 1,
        },
      ],
      $refType,
    },
  };
  expect(renderer.render(<BookNow {...props} />)).toMatchSnapshot();
});

it('renders without crashing with missing data', () => {
  const props = {
    navigation,
    maxPersons: 2,
    amount: '0',
    rooms: null,
  };

  expect(renderer.render(<BookNow {...props} />)).toMatchSnapshot();
});

it('calls handleGoToPayment when numberOfGuests = maxPersons', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
    maxPersons: 5,
  };
  const wrapper = create(
    <HotelsContext.Provider
      // $FlowExpectedError: Passing just props needed to run test
      value={{ hotelId: '1245', getGuestCount: jest.fn(() => 5) }}
    >
      {/*  $FlowExpectedError: Passing just props needed to run test */}
      <BookNow {...props} />
    </HotelsContext.Provider>,
  );
  const button = wrapper.root.findByProps({ testID: 'bookNowButton' });
  button.props.onPress();
  expect(props.navigation.navigate).toHaveBeenCalledWith('Payment', {
    hotelId: '1245',
    language: 'en',
    rooms: [],
  });
});

it('should show an alert if numberOfGuests > maxPersons', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
    maxPersons: 2,
  };
  const spy = jest.spyOn(Alert, 'translatedAlert');

  const wrapper = create(
    <HotelsContext.Provider
      // $FlowExpectedError: Passing just props needed to run test
      value={{ hotelId: '1245', guestCount: 4 }}
    >
      {/*  $FlowExpectedError: Passing just props needed to run test */}
      <BookNow {...props} />
    </HotelsContext.Provider>,
  );
  const button = wrapper.root.findByProps({ testID: 'bookNowButton' });
  button.props.onPress();

  expect(props.navigation.navigate).not.toHaveBeenCalled();

  expect(spy).toHaveBeenCalled(); // eslint-disable-line jest/prefer-called-with
});
