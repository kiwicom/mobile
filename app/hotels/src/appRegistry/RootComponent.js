// @flow

import * as React from 'react';
import { ConfigContext } from '@kiwicom/mobile-config';
import { Dimensions, type DimensionType } from '@kiwicom/mobile-shared';
import idx from 'idx';

import HotelsFilterContext from '../HotelsFilterContext';
import HotelsContext, { type RoomConfigurationType } from '../HotelsContext';
import SearchResultsContext from '../navigation/allHotels/SearchResultsContext';
import type { Coordinates } from '../CoordinatesType';

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
  +coordinates?: Coordinates | null,
|};

export default class RootComponent extends React.Component<Props> {
  render = () => (
    <SearchResultsContext.Provider>
      <ConfigContext.Provider dataSaverEnabled={this.props.dataSaverEnabled}>
        <HotelsFilterContext.Provider>
          <HotelsContext.Provider
            version={this.props.version}
            cityId={this.props.cityId}
            checkin={this.props.checkin}
            checkout={this.props.checkout}
            roomsConfiguration={this.props.roomsConfiguration}
            currency={this.props.currency}
            cityName={this.props.cityName}
            latitude={idx(this.props, _ => _.coordinates.latitude) || null}
            longitude={idx(this.props, _ => _.coordinates.longitude) || null}
          >
            <Dimensions.Provider dimensions={this.props.dimensions}>
              {this.props.children}
            </Dimensions.Provider>
          </HotelsContext.Provider>
        </HotelsFilterContext.Provider>
      </ConfigContext.Provider>
    </SearchResultsContext.Provider>
  );
}
