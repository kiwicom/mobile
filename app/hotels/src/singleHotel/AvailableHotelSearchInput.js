// @flow

export type RoomsConfiguration = $ReadOnlyArray<{|
  adultsCount: number,
  children: Array<{|
    age: number,
  |}>,
|}>;

export type AvailableHotelSearchInput = {|
  hotelId: string,
  checkin: Date,
  checkout: Date,
  roomsConfiguration: RoomsConfiguration,
|};
