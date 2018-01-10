// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { AgePicker } from '@kiwicom/react-native-app-common';

import ChildrenAgesControl from '../ChildrenAgesControl';
import AgeControl from '../AgeControl';

const renderControl = (onChange: Function) => {
  // This test covers fixed age change handler.
  // Handler modified props and still would passed without freezed props.
  // (That's why it worked in Expo and test, but not anymore in pure RN).
  // Therefore I freeze props to be sure it would fail in bad cause and pass in fixed cause.
  const age = Object.freeze({ age: 1 });
  const childrenAges = [age];
  return renderer.create(
    <ChildrenAgesControl onChange={onChange} childrenAges={childrenAges} />,
  );
};

it('age picker handler should change proper child age', () => {
  expect.assertions(2);

  const onChange = jest.fn();
  const testRenderer = renderControl(onChange);
  const testInstance = testRenderer.root;

  // Initial age should be 1
  const ageControl = testInstance.findByType(AgeControl);
  expect(ageControl.props.age).toBe(1);

  // Pick age = 2
  const agePicker = testInstance.findByType(AgePicker);
  agePicker.props.onChange(2);
  expect(onChange).toBeCalledWith([{ age: 2 }]);
});
