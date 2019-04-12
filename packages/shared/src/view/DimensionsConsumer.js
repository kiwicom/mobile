// @flow

import * as React from 'react';

import { type DimensionType } from '../../types/Objects';
import Context from './DimensionsContext';

type Props = {|
  +children: DimensionType => React.Node,
|};

type InjectedProps = {|
  +width?: number,
  +height?: number,
|};

export function withDimensions<PassedProps: {}>(
  Component: React.AbstractComponent<PassedProps>,
): React.AbstractComponent<$Diff<PassedProps, InjectedProps>> {
  return class WithDimensions extends React.Component<
    $Diff<PassedProps, InjectedProps>,
  > {
    renderInner = ({ dimensions }) => {
      return <Component {...this.props} {...dimensions} />;
    };

    render() {
      return <Context.Consumer>{this.renderInner}</Context.Consumer>;
    }
  };
}

export default function DimensionsConsumer(props: Props) {
  const { dimensions } = React.useContext(Context);

  return props.children({ height: dimensions.height, width: dimensions.width });
}
