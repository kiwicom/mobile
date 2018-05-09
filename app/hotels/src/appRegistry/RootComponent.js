// @flow

import * as React from 'react';
import { NativeModules } from 'react-native';
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
  onBackClicked: () => void,
  dataSaverEnabled: boolean,
  render: (onBackClicked: () => void) => React.Element<any>,
|};

export default class RootComponent extends React.Component<Props> {
  emitDimensionChanges = (event: OnLayout) => {
    const { width, height } = event.nativeEvent.layout;
    Device.emitDimensionChanges(height, width);
  };

  onBackClicked = () => {
    if (NativeModules.RNNavigationModule) {
      NativeModules.RNNavigationModule.leaveHotels();
    } else {
      this.props.onBackClicked();
    }
  };

  render = () => (
    <ConfigContext.Provider dataSaverEnabled={this.props.dataSaverEnabled}>
      <HotelsSearchContext.Provider>
        <HotelsFilterContext.Provider>
          <GeolocationContext.Provider>
            <AdaptableLayout.Provider>
              {this.props.render(this.onBackClicked)}
            </AdaptableLayout.Provider>
          </GeolocationContext.Provider>
        </HotelsFilterContext.Provider>
      </HotelsSearchContext.Provider>
    </ConfigContext.Provider>
  );
}
