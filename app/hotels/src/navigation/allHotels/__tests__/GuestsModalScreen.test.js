// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import { GuestsModalScreen } from '../GuestsModalScreen';
import type { RoomConfigurationType } from '../../../allHotels/searchForm/SearchParametersType';

jest.mock('InteractionManager');

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

const shallowRenderGuestsPopup = (searchChange: Function) => {
  const renderer = new ShallowRenderer();
  const guests: RoomConfigurationType = {
    adultsCount: 3,
    children: [],
  };
  return renderer.render(
    <GuestsModalScreen
      searchChange={searchChange}
      navigation={navigation}
      guests={guests}
    />,
  );
};

const renderGuestsPopup = (searchChange: Function) => {
  const guests: RoomConfigurationType = {
    adultsCount: 1,
    children: [],
  };
  return renderer.create(
    <GuestsModalScreen
      searchChange={searchChange}
      navigation={navigation}
      guests={guests}
    />,
  );
};

afterEach(() => {
  jest.resetAllMocks();
});

describe('GuestsModalScreen', () => {
  it('Renders correctly', () => {
    const renderer = shallowRenderGuestsPopup(jest.fn());
    expect(renderer).toMatchSnapshot();
  });

  it('should call searchChange and navigatin.goBack from onSave when child age is not missing', () => {
    const searchChange = jest.fn();
    const testRenderer = renderGuestsPopup(searchChange);
    const testInstance = testRenderer.root;

    testInstance.instance.onSave();

    expect(searchChange).toHaveBeenCalled();
    expect(navigation.goBack).toHaveBeenCalled();
  });

  it('should not call searchChange nor go back from onSave when child age is missing', () => {
    const searchChange = jest.fn();
    const testRenderer = renderGuestsPopup(searchChange);
    const testInstance = testRenderer.root;
    const isAgeMissingMock = jest.fn();
    isAgeMissingMock.mockReturnValue(true);
    testInstance.instance.isMissingAge = isAgeMissingMock;

    testInstance.instance.onSave();

    expect(searchChange).not.toHaveBeenCalled();
    expect(navigation.goBack).not.toHaveBeenCalled();
  });

  it('should remove error when children is set to 0', async () => {
    const onClose = jest.fn();
    const testRenderer = renderGuestsPopup(onClose);
    const testInstance = testRenderer.getInstance();

    testInstance.handleChildrenChange(1);
    await testInstance.setState({ isMissingAge: true });
    testInstance.handleChildrenChange(0);

    expect(testInstance.state.isMissingAge).toEqual(false);
  });

  it('should not produce an error when setting age of a child', async () => {
    const searchChange = jest.fn();
    const testRenderer = renderGuestsPopup(searchChange);
    const testInstance = testRenderer.getInstance();
    await testInstance.handleChildrenChange(1);
    testInstance.handleChildrenChange(1);

    testInstance.handleChildrenAgesChange([{ age: 2 }, { age: null }]);

    expect(testInstance.state.isMissingAge).toEqual(false);
  });
});
