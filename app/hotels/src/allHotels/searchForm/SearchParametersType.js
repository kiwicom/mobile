// @flow

// Valid room configuration with everything set.
export type RoomConfigurationType = {|
  adultsCount: number,
  children: Array<{|
    age: number,
  |}>,
|};

export type SearchParams = {
  checkin: Date,
  checkout: Date,
  roomsConfiguration: RoomConfigurationType,
};

export type OnChangeSearchParams = {
  checkin?: Date,
  checkout?: Date,
  roomConfiguration?: RoomConfigurationType,
};
