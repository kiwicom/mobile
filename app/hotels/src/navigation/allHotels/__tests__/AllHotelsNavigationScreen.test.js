// @flow

import ShallowRenderer from 'react-test-renderer/shallow';
import { DateUtils } from '@kiwicom/mobile-localization';

import AllHotelsNavigationScreen from '../AllHotelsNavigationScreen';

const renderer = new ShallowRenderer();
const checkin = new Date();
const checkout = DateUtils().addDays(6);
const navigation = {
  navigate: jest.fn(),
  setParams: jest.fn(),
  goBack: jest.fn(),
  getParam: jest.fn(),
  dispatch: jest.fn(),
  isFocused: jest.fn(),
  state: {
    params: {},
  },
  addListener: jest.fn(() => ({
    remove: jest.fn(),
  })),
};

const getNavigationOptions = (lastNavigationMode?: string) => {
  const NavigationOptions = AllHotelsNavigationScreen.navigationOptions({
    navigation: navigation,
    currency: 'EUR',
    coordinates: {
      latitude: 51.5,
      longitude: 0,
    },
    checkin: checkin,
    checkout: checkout,
    onBackClicked: jest.fn(),
    lastNavigationMode: lastNavigationMode,
  });

  return renderer.render(NavigationOptions.headerLeft);
};

it('renders close button with `closeNativeModal` onPress function when lastNavigationMode is `present`', () => {
  expect(getNavigationOptions('present')).toMatchSnapshot();
});

it('renders arrow icon button with `goBack` onPress function when lastNavigationMode is `push`', () => {
  expect(getNavigationOptions('push')).toMatchSnapshot();
});

it('renders arrow icon button with `goBack` onPress function when lastNavigationMode is null', () => {
  expect(getNavigationOptions()).toMatchSnapshot();
});
