// @flow

import * as React from 'react';

export type Props = {|
  date: Date,
  onDateChange: (date: Date) => void,
  placeholder?: string,
  minDate?: Date,
  maxDate?: Date,
  iconComponent?: React.Node,
|};
