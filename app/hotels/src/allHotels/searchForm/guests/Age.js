// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +age: number | null,
|};

export default function Age({ age }: Props) {
  if (age === null) {
    return (
      <Translation
        testID="ageControlValue"
        id="hotels_search.guests.age_control.select"
      />
    );
  }
  if (age === 0) {
    return (
      <Translation
        testID="ageControlValue"
        id="hotels_search.guests.age_control.less_than_one"
      />
    );
  }

  return <Translation testID="ageControlValue" passThrough={age} />;
}
