// @flow

type FilterConfiguration = Object;

export type Filter = {|
  title: string,
  filter: string,
  icon?: { name: string, type?: string },
  isActive: boolean,
  configuration?: FilterConfiguration,
|};
