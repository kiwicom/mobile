// @flow

import * as React from 'react';

export type Props = {|
  +isVisible: boolean,
  +mode?: 'date',
  +datePickerMode?: 'calendar' | 'spinner' | 'default', // this prop is supported only on android
  +date?: Date,
  +minDate?: Date,
  +maxDate?: Date,
  +onConfirm: Date => void,
  +onDismiss: () => void,
  +labels: {|
    +cancel: React.Element<any>,
    +confirm: React.Element<any>,
  |},
|};
