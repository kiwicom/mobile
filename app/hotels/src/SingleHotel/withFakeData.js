// @flow

import * as React from 'react';

export default function withFakeData<ContainerProps, WrappedComponentProps>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>,
  wrappedComponentPropsFactory: ContainerProps => WrappedComponentProps,
): React.ComponentType<ContainerProps> {
  return function FakeContainer(containerProps: ContainerProps) {
    return (
      <WrappedComponent {...wrappedComponentPropsFactory(containerProps)} />
    );
  };
}
