// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

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
