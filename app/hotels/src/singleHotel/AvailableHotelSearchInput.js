// @flow

export type RoomsConfiguration = Array<{|
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
