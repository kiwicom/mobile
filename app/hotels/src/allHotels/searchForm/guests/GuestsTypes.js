// @flow

// Age in progress
// Use before values are saved.
export type ChildAge = {|
  age: number | null,
|};

// Room configuration in progress, not all values are set
// Use before values are saved.
export type RoomConfigurationType = {|
  adultsCount: number,
  children: ChildAge[],
|};
