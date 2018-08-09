// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { PriorToDeparture } from '../PriorToDeparture';

const getWrapper = (props: Object) => {
  return renderer.create(<PriorToDeparture data={props} />);
};

describe('PriorToDeparture', () => {
  it('renders only flying soon if gate and recheckRequired are false', () => {
    const instance = getWrapper({
      departure: {
        localTime: new Date(),
      },
    });

    expect(instance.toTree().rendered[0].props.text.length).toBe(1);
    expect(instance.toTree().rendered[0].props.text[0].key).toBe('flying-soon');
  });

  it('renders go-to-gate if gate is defined and recheck required is false', () => {
    const instance = getWrapper({
      recheckRequired: false,
      departure: {
        localTime: new Date(),
        gate: '5',
      },
    });

    expect(instance.toTree().rendered[0].props.text.length).toBe(3);
    expect(instance.toTree().rendered[0].props.text[0].key).toBe('flying-soon');
    expect(instance.toTree().rendered[0].props.text[1].key).toBe('space');
    expect(instance.toTree().rendered[0].props.text[2].key).toBe('go-to-gate');
  });

  it('renders recheck-bags if gate is null and recheck required is true', () => {
    const instance = getWrapper({
      recheckRequired: true,
      departure: {
        localTime: new Date(),
        gate: null,
      },
    });

    expect(instance.toTree().rendered[0].props.text.length).toBe(3);
    expect(instance.toTree().rendered[0].props.text[0].key).toBe('flying-soon');
    expect(instance.toTree().rendered[0].props.text[1].key).toBe('space');
    expect(instance.toTree().rendered[0].props.text[2].key).toBe(
      'recheck-bags',
    );
  });

  it('renders recheck-bags-and-go-to-gate if gate is defined and recheck required is true', () => {
    const instance = getWrapper({
      recheckRequired: true,
      departure: {
        localTime: new Date(),
        gate: '4',
      },
    });

    expect(instance.toTree().rendered[0].props.text.length).toBe(3);
    expect(instance.toTree().rendered[0].props.text[0].key).toBe('flying-soon');
    expect(instance.toTree().rendered[0].props.text[1].key).toBe('space');
    expect(instance.toTree().rendered[0].props.text[2].key).toBe(
      'recheck-bags-and-go-to-gate',
    );
  });
});
