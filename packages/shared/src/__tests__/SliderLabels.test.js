// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';
import renderer from 'react-test-renderer';

import SliderLabels from '../SliderLabels';

it('one label', () => {
  PlaygroundRenderer.render(
    <SliderLabels
      startLabel={<Translation passThrough="label" />}
      startValue={46}
      max={1000}
      min={1}
    />,
  );
});

it('two labels', () => {
  PlaygroundRenderer.render(
    <SliderLabels
      startLabel={<Translation passThrough="start label" />}
      startValue={46}
      endLabel={<Translation passThrough="end label" />}
      endValue={850}
      max={1000}
      min={1}
    />,
  );
});

const requestAF = global.requestAnimationFrame;
beforeEach(async () => (global.requestAnimationFrame = jest.fn()));
afterEach(() => (global.requestAnimationFrame = requestAF));

it('startValue in the middle', () => {
  const wrapper = renderer
    .create(
      <SliderLabels
        max={5}
        min={1}
        startLabel={<Translation passThrough="label" />}
        startValue={3}
      />,
    )
    .getInstance();

  wrapper.saveFullWidth({ nativeEvent: { layout: { width: 500 } } });
  wrapper.saveLabelStartWidth({ nativeEvent: { layout: { width: 20 } } });
  wrapper.saveLabelEndWidth({ nativeEvent: { layout: { width: 20 } } });

  expect(wrapper.state.labelStartAtMax).toBe(false);
  wrapper.setPaddingForOneLabel();
  expect(wrapper.state.labelStartAtMax).toBe(false);
});

it('startValue reaches max value', () => {
  const wrapper = renderer
    .create(
      <SliderLabels
        max={5}
        min={1}
        startLabel={<Translation passThrough="label" />}
        startValue={5}
      />,
    )
    .getInstance();

  wrapper.saveFullWidth({ nativeEvent: { layout: { width: 500 } } });
  wrapper.saveLabelStartWidth({ nativeEvent: { layout: { width: 20 } } });

  expect(wrapper.state.labelStartAtMax).toBe(false);
  wrapper.setPaddingForOneLabel();
  expect(wrapper.state.labelStartAtMax).toBe(true);
});

it('startValue goes beyond max value', () => {
  const wrapper = renderer
    .create(
      <SliderLabels
        max={5}
        min={1}
        startLabel={<Translation passThrough="label" />}
        startValue={10}
      />,
    )
    .getInstance();

  wrapper.saveFullWidth({ nativeEvent: { layout: { width: 500 } } });
  wrapper.saveLabelStartWidth({ nativeEvent: { layout: { width: 20 } } });

  expect(wrapper.state.labelStartAtMax).toBe(false);
  wrapper.setPaddingForOneLabel();
  expect(wrapper.state.labelStartAtMax).toBe(true);
});

it('Both sides have padding', () => {
  const wrapper = renderer
    .create(
      <SliderLabels
        max={20}
        min={1}
        startLabel={<Translation passThrough="label" />}
        startValue={8}
        endLabel={<Translation passThrough="label" />}
        endValue={16}
      />,
    )
    .getInstance();

  wrapper.saveFullWidth({ nativeEvent: { layout: { width: 500 } } });
  wrapper.saveLabelStartWidth({ nativeEvent: { layout: { width: 20 } } });
  wrapper.saveLabelEndWidth({ nativeEvent: { layout: { width: 20 } } });

  wrapper.setPaddingForTwoLabels();
  expect(wrapper.state.paddingLeft).not.toBe(0);
  expect(wrapper.state.paddingRight).not.toBe(0);
});

it('No padding should be set', () => {
  const wrapper = renderer
    .create(
      <SliderLabels
        max={100}
        min={1}
        startLabel={<Translation passThrough="label" />}
        startValue={1}
        endLabel={<Translation passThrough="label" />}
        endValue={100}
      />,
    )
    .getInstance();

  wrapper.saveFullWidth({ nativeEvent: { layout: { width: 500 } } });
  wrapper.saveLabelStartWidth({ nativeEvent: { layout: { width: 20 } } });
  wrapper.saveLabelEndWidth({ nativeEvent: { layout: { width: 20 } } });

  wrapper.setPaddingForTwoLabels();
  expect(wrapper.state.paddingLeft).toBe(0);
  expect(wrapper.state.paddingRight).toBe(0);
});
