// @flow strict

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { MissingInformation } from '../MissingInformation';

const renderer = new ShallowRenderer();

const getWrapper = data =>
  // $FlowExpectedError: Intentionally passing just what is needed to test functionality
  renderer.render(<MissingInformation data={data} navigation={null} />);

describe('MissingInformation', () => {
  it('renders correctly when a passenger is missing id', () => {
    const data = {
      passengers: [
        {
          travelDocument: {
            idNumber: '123321',
          },
        },
        {
          travelDocument: {
            idNumber: null,
          },
        },
      ],
    };
    const wrapper = getWrapper(data);

    expect(wrapper.props.children).not.toBeNull();
  });

  it('renders null when all passengers have id', () => {
    const data = {
      passengers: [
        {
          travelDocument: {
            idNumber: '123321',
          },
        },
        {
          travelDocument: {
            idNumber: '123456',
          },
        },
      ],
    };
    const wrapper = getWrapper(data);

    expect(wrapper).toBeNull();
  });
});
