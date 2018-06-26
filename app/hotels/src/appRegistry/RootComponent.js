// @flow

import * as React from 'react';
import { ConfigContext } from '@kiwicom/mobile-config';
import {
  GeolocationContext,
  Dimensions,
  type DimensionType,
} from '@kiwicom/mobile-shared';

import HotelsSearchContext from '../HotelsSearchContext';
import HotelsFilterContext from '../HotelsFilterContext';

type Props = {|
  dataSaverEnabled: boolean,
  children: React.Node,
  dimensions: DimensionType,
|};

export default class RootComponent extends React.Component<Props> {
  render = () => (
    <ConfigContext.Provider dataSaverEnabled={this.props.dataSaverEnabled}>
      <HotelsSearchContext.Provider>
        <HotelsFilterContext.Provider>
          <GeolocationContext.Provider>
            <Dimensions.Provider dimensions={this.props.dimensions}>
              {this.props.children}
            </Dimensions.Provider>
          </GeolocationContext.Provider>
        </HotelsFilterContext.Provider>
      </HotelsSearchContext.Provider>
    </ConfigContext.Provider>
  );
}
