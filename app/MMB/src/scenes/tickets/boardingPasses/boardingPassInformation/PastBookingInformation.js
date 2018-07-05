// @flow strict

import * as React from 'react';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';

type Props = {|
  +boardingPassAvailableDate: Date | null,
  +boardingPassUrl: ?string,
|};

export default function PastBookingInformation({
  boardingPassAvailableDate,
  boardingPassUrl,
}: Props) {
  if (boardingPassAvailableDate === null || boardingPassUrl == null) {
    return null;
  }

  return (
    <Translation
      id="mmb.boarding_passes.past_booking_information.missed_checkin"
      values={{
        date: DateFormatter(boardingPassAvailableDate).formatToBirthday(),
      }}
    />
  );
}
