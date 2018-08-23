// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import { DateFormatter } from '@kiwicom/mobile-localization';
import { StyleSheet, AdaptableLayout } from '@kiwicom/mobile-shared';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import FilterStripe from '../../filter/FilterStripe';
import {
  withHotelsContext,
  type RoomConfigurationType,
} from '../../HotelsContext';
import HotelsFilterContext from '../../HotelsFilterContext';
import MapScreen from './MapScreen';
import { sanitizeHotelFacilities } from '../../GraphQLSanitizers';
import type { NewAllHotelsMapQueryResponse } from './__generated__/NewAllHotelsMapQuery.graphql';

type Props = {|
  +cityId: string,
  +checkin: Date | null,
  +checkout: Date | null,
  +currency: string,
  +roomsConfiguration: RoomConfigurationType,
  +navigation: NavigationType,
|};

class NewAllHotelsMap extends React.Component<Props> {
  openSingleHotel = (hotelId: string) => {
    this.props.navigation.navigate('SingleHotel', {
      hotelId,
      checkin: this.props.checkin,
      checkout: this.props.checkout,
      roomsConfiguration: this.props.roomsConfiguration,
    });
  };

  renderInnerComponent = (props: NewAllHotelsMapQueryResponse) => (
    <MapScreen
      data={props.allAvailableHotels}
      onOpenSingleHotel={this.openSingleHotel}
    />
  );

  render = () => {
    const {
      checkin,
      checkout,
      cityId,
      currency,
      roomsConfiguration,
    } = this.props;
    if (checkin === null || checkout === null) {
      return null;
    }
    return (
      <HotelsFilterContext.Consumer>
        {({ filterParams }) => (
          <View style={styles.container}>
            <AdaptableLayout renderOnNarrow={<FilterStripe />} />
            <PublicApiRenderer
              query={graphql`
                query NewAllHotelsMapQuery(
                  $search: HotelsSearchInput!
                  $filter: HotelsFilterInput
                  $options: AvailableHotelOptionsInput
                ) {
                  allAvailableHotels(
                    search: $search
                    filter: $filter
                    options: $options
                  ) {
                    ...MapScreen
                  }
                }
              `}
              variables={{
                search: {
                  cityId,
                  roomsConfiguration,
                  checkin: DateFormatter(checkin).formatForMachine(),
                  checkout: DateFormatter(checkout).formatForMachine(),
                },
                filter: {
                  ...filterParams,
                  hotelFacilities: sanitizeHotelFacilities(
                    filterParams.hotelFacilities,
                  ),
                },
                options: {
                  currency,
                },
              }}
              render={this.renderInnerComponent}
            />
          </View>
        )}
      </HotelsFilterContext.Consumer>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default withHotelsContext(withNavigation(NewAllHotelsMap));
