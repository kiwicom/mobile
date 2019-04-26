// @flow strict

import * as React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import Translation from '../../Translation';
import SliderLabels from '../SliderLabels';

const shallowRenderer = new ShallowRenderer();

it('renders with one label', () => {
  expect(
    shallowRenderer.render(
      <SliderLabels
        startLabel={<Translation passThrough="label" />}
        startValue={46}
        max={1000}
        min={1}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders with two labels', () => {
  expect(
    shallowRenderer.render(
      <SliderLabels
        startLabel={<Translation passThrough="start label" />}
        startValue={46}
        endLabel={<Translation passThrough="end label" />}
        endValue={850}
        max={1000}
        min={1}
      />,
    ),
  ).toMatchSnapshot();
});

it('should have startValue in the middle', () => {
  const wrapper = renderer.create(
    <SliderLabels
      max={5}
      min={1}
      startLabel={<Translation passThrough="label" />}
      startValue={3}
    />,
  );
  const viewContainer = wrapper.root.findByProps({
    testID: 'sliderLabelsContainer',
  });
  const startLabel = wrapper.root.findByProps({
    testID: 'startLabelContainer',
  });

  renderer.act(() => {
    viewContainer.props.onLayout({
      nativeEvent: { layout: { width: 500 } },
    });
    startLabel.props.onLayout({ nativeEvent: { layout: { width: 20 } } });
  });

  expect(startLabel.props.style).toMatchInlineSnapshot(`
        Object {
          "transform": Array [
            Object {
              "translateX": 290,
            },
          ],
        }
    `);
});

it('should display the label at the end', () => {
  const wrapper = renderer.create(
    <SliderLabels
      max={5}
      min={1}
      startLabel={<Translation passThrough="label" />}
      startValue={5}
    />,
  );

  const viewContainer = wrapper.root.findByProps({
    testID: 'sliderLabelsContainer',
  });
  const startLabel = wrapper.root.findByProps({
    testID: 'startLabelContainer',
  });

  renderer.act(() => {
    viewContainer.props.onLayout({
      nativeEvent: { layout: { width: 500 } },
    });
    startLabel.props.onLayout({ nativeEvent: { layout: { width: 20 } } });
  });

  expect(startLabel.props.style).toMatchInlineSnapshot(`
    Object {
      "transform": Array [
        Object {
          "translateX": 472,
        },
      ],
    }
  `);
});

it('should have translateX on both labels', () => {
  const wrapper = renderer.create(
    <SliderLabels
      max={20}
      min={1}
      startLabel={<Translation passThrough="label" />}
      startValue={8}
      endLabel={<Translation passThrough="label" />}
      endValue={16}
    />,
  );

  const viewContainer = wrapper.root.findByProps({
    testID: 'sliderLabelsContainer',
  });
  const startLabel = wrapper.root.findByProps({
    testID: 'startLabelContainer',
  });
  const endLabel = wrapper.root.findByProps({
    testID: 'endLabelContainer',
  });

  renderer.act(() => {
    viewContainer.props.onLayout({ nativeEvent: { layout: { width: 500 } } });
    startLabel.props.onLayout({ nativeEvent: { layout: { width: 20 } } });
    endLabel.props.onLayout({ nativeEvent: { layout: { width: 20 } } });
  });

  expect(startLabel.props.style).toMatchInlineSnapshot(`
        Object {
          "transform": Array [
            Object {
              "translateX": 190,
            },
          ],
        }
    `);
  expect(endLabel.props.style).toMatchInlineSnapshot(`
        Object {
          "transform": Array [
            Object {
              "translateX": -90,
            },
          ],
        }
    `);
});

it('should have no translateX', () => {
  const wrapper = renderer.create(
    <SliderLabels
      max={100}
      min={1}
      startLabel={<Translation passThrough="label" />}
      startValue={1}
      endLabel={<Translation passThrough="label" />}
      endValue={100}
    />,
  );

  const viewContainer = wrapper.root.findByProps({
    testID: 'sliderLabelsContainer',
  });
  const startLabel = wrapper.root.findByProps({
    testID: 'startLabelContainer',
  });
  const endLabel = wrapper.root.findByProps({
    testID: 'endLabelContainer',
  });

  renderer.act(() => {
    viewContainer.props.onLayout({ nativeEvent: { layout: { width: 500 } } });
    startLabel.props.onLayout({ nativeEvent: { layout: { width: 20 } } });
    endLabel.props.onLayout({ nativeEvent: { layout: { width: 20 } } });
  });

  expect(startLabel.props.style.transform[0].translateX).toBe(0);
  expect(endLabel.props.style.transform[0].translateX).toBe(0);
});
