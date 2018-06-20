// @flow strict

// test immutability
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

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
  return (
    firstDate.getUTCFullYear() === secondDate.getUTCFullYear() &&
    firstDate.getUTCMonth() === secondDate.getUTCMonth() &&
    firstDate.getUTCDate() === secondDate.getUTCDate()
  );
};

export default DateUtils;
