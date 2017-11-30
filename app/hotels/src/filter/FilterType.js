// @flow

type FilterConfiguration = Object;

export type FilterType = {|
  title: string,
  filter: string,
  icon?: {|
    name: string,
    type?: string,
  |},
  isActive: boolean,
  configuration?: FilterConfiguration,
|};
