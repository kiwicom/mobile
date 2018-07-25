// @flow

import * as React from 'react';
import type { DateFormatterFunctions } from '@kiwicom/mobile-localization';

export type Props = {|
  +date: ?Date,
  +onDateChange: (date: Date) => void,
  +placeholder?: string,
  +minDate?: Date,
  +maxDate?: Date,
  +iconComponent?: React.Node,
  +formatFunction?: DateFormatterFunctions,
  +disabled: boolean,
|};
