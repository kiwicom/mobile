// @flow

import * as React from 'react';
import { AuthContext } from '@kiwicom/mobile-relay';
import { Dimensions, type DimensionType } from '@kiwicom/mobile-shared';

import BookingDetailContext from '../context/BookingDetailContext';

type Props = {|
  children: React.Node,
  dimensions: DimensionType,
  accessToken: string,
|};

export default class RootComponent extends React.Component<Props> {
  render = () => {
    return (
      <Dimensions.Provider dimensions={this.props.dimensions}>
        <AuthContext.Provider accessToken={this.props.accessToken}>
          <BookingDetailContext.Provider>
            {this.props.children}
          </BookingDetailContext.Provider>
        </AuthContext.Provider>
      </Dimensions.Provider>
    );
  };
}
