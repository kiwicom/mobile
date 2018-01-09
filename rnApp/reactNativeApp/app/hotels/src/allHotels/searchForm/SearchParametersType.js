// @flow

export type RoomConfigurationType = {|
  adultsCount: number,
  children: number[],
|};

export type SearchParametersType = {|
  latitude: number | null,
  longitude: number | null,
  checkin: Date | null,
  checkout: Date | null,
  roomsConfiguration: RoomConfigurationType,
|};
