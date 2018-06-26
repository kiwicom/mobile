// @flow

import * as React from 'react';
import { type DimensionType } from '@kiwicom/mobile-shared';

import Context from './DimensionsContext';

type Props = {|
  +children: DimensionType => React.Node,
|};

export default class DimensionsConsumer extends React.Component<Props> {
  render = () => {
    return (
      <Context.Consumer>
        {({ dimensions }) => {
          if (dimensions == null) {
            if (process.env.NODE_ENV !== 'test') {
              throw new Error(
                'DimensionsConsumer has been called in wrong context. You have to ' +
                  'use "DimensionsProvider" on the root level first ' +
                  "otherwise it won't work.",
              );
            }
            return null;
          }
          return this.props.children(dimensions);
        }}
      </Context.Consumer>
    );
  };
}
