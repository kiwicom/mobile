// @flow

import * as React from 'react';
import ShallowTestRenderer from 'react-test-renderer/shallow';
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
  renderer: ShallowTestRenderer;

  constructor() {
    this.renderer = new ShallowTestRenderer();
  }

  render(component: React.Node) {
    if (process.env.NODE_ENV === 'test') {
      expect(
        this.renderer.render(React.Children.only(component)),
      ).toMatchSnapshot();
    } else {
      this.components.push(component);
    }
  }
}();
