// @flow

import * as React from 'react';
import ShallowTestRenderer from 'react-test-renderer/shallow';
import DeepTestRenderer from 'react-test-renderer';
import { it } from 'global';

if (it === undefined && process.env.NODE_ENV !== 'test') {
  global.it = (testName, testCallback) => testCallback();
  global.describe = (describeName, describeCallback) => describeCallback();
  global.expect = () => ({
    toBe: () => {},
    // TODO: add mocked methods as needed
  });
}

export default new class PlaygroundRenderer {
  components = [];
  shallowRenderer: ShallowTestRenderer;

  constructor() {
    this.shallowRenderer = new ShallowTestRenderer();
  }

  render(component: React.Node, deeply: boolean = false) {
    if (process.env.NODE_ENV === 'test') {
      if (deeply === true) {
        expect(
          DeepTestRenderer.create(React.Children.only(component)),
        ).toMatchSnapshot();
      } else {
        expect(
          this.shallowRenderer.render(React.Children.only(component)),
        ).toMatchSnapshot();
      }
    } else {
      this.components.push(component);
    }
  }
}();
