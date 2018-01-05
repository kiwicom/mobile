// @flow

// Valid room configuration with everything set.
export type RoomConfigurationType = {|
  adultsCount: number,
  children: Array<{|
    age: number,
  |}>,
|};

export type SearchParametersType = {
  checkin: Date | null,
  checkout: Date | null,
  roomsConfiguration: RoomConfigurationType,
};

export type OnChangeSearchParams = {
  checkin?: Date | null,
  checkout?: Date | null,
  roomConfiguration?: RoomConfigurationType,
};
