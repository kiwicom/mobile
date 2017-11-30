// @flow

export type SearchParametersType = {|
  latitude: number | null,
  longitude: number | null,
  checkin: Date | null,
  checkout: Date | null,
  roomsConfiguration: {|
    adultsCount: number,
  |},
|};
