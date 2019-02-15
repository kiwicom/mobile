// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Translation } from '@kiwicom/mobile-localization';

import ReadMoreLink from '../ReadMoreLink';

const getProps = (
  type = 'revealed',
  onExpandText = null,
  onHideText = null,
  optionalProps = {},
) => ({
  label: <Translation passThrough="test" />,
  handlePress: jest.fn(),
  type,
  onExpandText,
  onHideText,
  ...optionalProps,
});

it('renders', () => {
  expect(renderer.create(<ReadMoreLink {...getProps()} />)).toMatchSnapshot();
});

it('calls onExpandText', () => {
  const onExpandText = jest.fn();
  const onHideText = jest.fn();
  const props = getProps('truncated', onExpandText, onHideText);

  const wrapper = renderer.create(<ReadMoreLink {...props} />).getInstance();
  wrapper.handlePress();

  expect(props.onExpandText).toHaveBeenCalledWith();
  expect(props.onHideText).not.toHaveBeenCalled();
});

it('calls onHideText', () => {
  const onExpandText = jest.fn();
  const onHideText = jest.fn();
  const props = getProps('revealed', onExpandText, onHideText);

  const wrapper = renderer.create(<ReadMoreLink {...props} />).getInstance();
  wrapper.handlePress();

  expect(props.onHideText).toHaveBeenCalledWith();
  expect(props.onExpandText).not.toHaveBeenCalled();
});
