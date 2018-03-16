// @flow

import { copyObject, transformDateStringsToDate } from '../PersistTransform';

describe('transformDateStringsToDate', () => {
  it('transform date string into date object', () => {
    const date = new Date(1);
    expect(transformDateStringsToDate(date.toISOString())).toEqual(date);
  });

  it('returns input if type is not a valid date', () => {
    const bool = true;
    const number = 3;
    const string = 'this is not a valid date';
    const object = {
      bool,
      number,
      string,
    };
    const testNull = null;
    let notDefined;

    expect(transformDateStringsToDate(bool)).toEqual(true);
    expect(transformDateStringsToDate(number)).toEqual(number);
    expect(transformDateStringsToDate(string)).toEqual(string);
    expect(transformDateStringsToDate(object)).toEqual(object);
    expect(transformDateStringsToDate(testNull)).toEqual(null);
    expect(transformDateStringsToDate(notDefined)).toBeUndefined();
  });
});

describe('copyObject', () => {
  it('copies deeply nested objects', () => {
    const testNull = null;
    let notDefined;
    const date = new Date();
    const myObject = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: {
          date: date.toISOString(),
          lol: 'lol',
          testNull,
          notDefined,
        },
      },
    };

    expect(copyObject(myObject)).toEqual({
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: {
          date,
          lol: 'lol',
          testNull,
          notDefined,
        },
      },
    });
  });
});
