// @flow

// Valid room configuration with everything set.
export type RoomConfigurationType = {|
  adultsCount: number,
  children: Array<{|
    age: number,
  |}>,
|};

export type SearchParametersType = {|
  latitude: number | null,
  longitude: number | null,
  checkin: Date | null,
  checkout: Date | null,
  roomsConfiguration: RoomConfigurationType,
|};
