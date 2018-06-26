// @flow strict

// test immutability
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const getUTCYearMonthDate = (date: Date) => {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    date: date.getUTCDate(),
  };
};

function DateUtils(rawDate: Date = new Date()) {
  return {
    addDays: (count: number) => addDays(rawDate, count),
  };
}

/**
 * Positive if A is later than B.
 * Negative if A is sooner than B.
 * ZERO for the same dates.
 *
 * Returned value is in miliseconds.
 */
DateUtils.diffInDays = (higherDate: Date, lowerDate: Date) => {
  const diffMs = higherDate - lowerDate;
  return Math.ceil(diffMs / (1000 * 3600 * 24));
};

DateUtils.isSameDay = (firstDate: Date, secondDate: Date): boolean => {
  const first = getUTCYearMonthDate(firstDate);
  const second = getUTCYearMonthDate(secondDate);
  return (
    first.year === second.year &&
    first.month === second.month &&
    first.date === second.date
  );
};

DateUtils.isAfterDate = (firstDate: Date, secondDate: Date): boolean => {
  const first = getUTCYearMonthDate(firstDate);
  const second = getUTCYearMonthDate(secondDate);
  return (
    first.year > second.year ||
    (first.year === second.year && first.month > second.month) ||
    (first.year === second.year &&
      first.month === second.month &&
      first.date > second.date)
  );
};

DateUtils.isBeforeDate = (firstDate: Date, secondDate: Date): boolean => {
  const first = getUTCYearMonthDate(firstDate);
  const second = getUTCYearMonthDate(secondDate);
  return (
    first.year < second.year ||
    (first.year === second.year && first.month < second.month) ||
    (first.year === second.year &&
      first.month === second.month &&
      first.date < second.date)
  );
};

export default DateUtils;
