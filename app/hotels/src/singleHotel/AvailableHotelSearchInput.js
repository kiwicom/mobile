// @flow

export type AvailableHotelSearchInput = {|
  hotelId: string,
  checkin: Date,
  checkout: Date,
  roomsConfiguration: Array<{|
    adultsCount: number,
    children: Array<{|
      age: number,
    |}>,
  |}>,
|};
