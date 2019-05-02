// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { create } from 'react-test-renderer';

import Translation from '../../Translation';
import Slider from '../Slider';

const onChange = () => {};

describe('Slider', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <Slider
        startValue={1}
        endValue={50}
        onChange={onChange}
        min={1}
        max={50}
      />,
    );
  });

  it('renders correctly with all values equal', () => {
    PlaygroundRenderer.render(
      <Slider
        startValue={500}
        endValue={500}
        onChange={onChange}
        min={500}
        max={500}
      />,
    );
  });

  it('renders with endValue undefined', () => {
    PlaygroundRenderer.render(
      <Slider startValue={1} onChange={onChange} min={1} max={50} />,
    );
  });
});

it('renders one label correctly', () => {
  const wrapper = create(
    <Slider
      startValue={500}
      endValue={500}
      onChange={onChange}
      min={500}
      max={500}
      startLabel={<Translation passThrough="startLabel" />}
    />,
  );

  expect(
    wrapper.root.findByProps({ testID: 'labelsContainer' }),
  ).not.toBeNull();
  expect(wrapper.root.findByType(Translation).props.passThrough).toBe(
    'startLabel',
  );
});

it('renders two labels correctly', () => {
  const wrapper = create(
    <Slider
      startValue={500}
      endValue={500}
      onChange={onChange}
      min={500}
      max={500}
      startLabel={<Translation testID="startLabel" passThrough="startLabel" />}
      endLabel={<Translation testID="endLabel" passThrough="endLabel" />}
    />,
  );

  expect(
    wrapper.root.findByProps({ testID: 'labelsContainer' }),
  ).not.toBeNull();

  expect(wrapper.root.findByProps({ testID: 'startLabel' })).not.toBeNull();
  expect(wrapper.root.findByProps({ testID: 'endLabel' })).not.toBeNull();
});

it('renders correctly without labels', () => {
  const wrapper = create(
    <Slider
      startValue={500}
      endValue={500}
      onChange={onChange}
      min={500}
      max={500}
    />,
  );

  expect(() => {
    wrapper.root.findByProps({ testID: 'labelsContainer' });
  }).toThrow();
});
