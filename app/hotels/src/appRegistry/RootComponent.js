// @flow

import * as React from 'react';
import { ConfigContext } from '@kiwicom/mobile-config';
import {
  Device,
  GeolocationContext,
  AdaptableLayout,
  type OnLayout,
} from '@kiwicom/mobile-shared';

import HotelsSearchContext from '../HotelsSearchContext';
import HotelsFilterContext from '../HotelsFilterContext';

type Props = {|
  dataSaverEnabled: boolean,
  children: React.Node,
|};

export default class RootComponent extends React.Component<Props> {
  emitDimensionChanges = (event: OnLayout) => {
    const { width, height } = event.nativeEvent.layout;
    Device.emitDimensionChanges(height, width);
  };

  render = () => (
    <ConfigContext.Provider dataSaverEnabled={this.props.dataSaverEnabled}>
      <HotelsSearchContext.Provider>
        <HotelsFilterContext.Provider>
          <GeolocationContext.Provider>
            <AdaptableLayout.Provider>
              {this.props.children}
            </AdaptableLayout.Provider>
          </GeolocationContext.Provider>
        </HotelsFilterContext.Provider>
      </HotelsSearchContext.Provider>
    </ConfigContext.Provider>
  );
}
