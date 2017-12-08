// @flow
import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import withFakeData from './withFakeData';

type HelloProps = {
  name: string,
};
const Hello = ({ name }: HelloProps) => <div>Hello {name}</div>;

type ContainerProps = {
  foo: 'bar',
};

describe('withFakeData', () => {
  it('wraps the component with provided props', () => {
    expect.assertions(2);

    const Container = withFakeData(Hello, (props: ContainerProps) => {
      expect(props).toEqual({ foo: 'bar' });

      return { name: 'World' };
    });
    const renderer = TestRenderer.create(<Container foo="bar" />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
