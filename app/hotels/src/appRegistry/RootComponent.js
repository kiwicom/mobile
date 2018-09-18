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
import HotelsContext, { type RoomConfigurationType } from '../HotelsContext';
import SearchResultsContext from '../navigation/allHotels/SearchResultsContext';

type Props = {|
  +dataSaverEnabled: boolean,
  +children: React.Node,
  +dimensions: DimensionType,
  +version: string,
  +cityId?: string,
  +cityName?: string,
  +checkin?: string,
  +checkout?: string,
  +roomsConfiguration?: RoomConfigurationType,
  +currency: string,
|};

export default class RootComponent extends React.Component<Props> {
  render = () => (
    <SearchResultsContext.Provider>
      <ConfigContext.Provider dataSaverEnabled={this.props.dataSaverEnabled}>
        <HotelsSearchContext.Provider>
          <HotelsFilterContext.Provider>
            <GeolocationContext.Provider>
              <HotelsContext.Provider
                version={this.props.version}
                cityId={this.props.cityId}
                checkin={this.props.checkin}
                checkout={this.props.checkout}
                roomsConfiguration={this.props.roomsConfiguration}
                currency={this.props.currency}
                cityName={this.props.cityName}
              >
                <Dimensions.Provider dimensions={this.props.dimensions}>
                  {this.props.children}
                </Dimensions.Provider>
              </HotelsContext.Provider>
            </GeolocationContext.Provider>
          </HotelsFilterContext.Provider>
        </HotelsSearchContext.Provider>
      </ConfigContext.Provider>
    </SearchResultsContext.Provider>
  );
}
