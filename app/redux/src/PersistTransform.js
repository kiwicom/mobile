// @flow

import moment from 'moment';
import { createTransform } from 'redux-persist';

export const transformDateStringsToDate = (input: any) => {
  if (typeof input === 'string' && moment(input).isValid()) {
    return new Date(input);
  }
  return input;
};

/**
 * Copies deeply nested objects like
 * input = { a: 1, b: 2, c: { d: 3 }
 * }
 */
export const copyObject = (input: Object) => {
  let output = {};
  Object.keys(input).forEach(key => {
    if (typeof input[key] === 'object' && input[key] != null) {
      output[key] = copyObject(input[key]);
    } else {
      output[key] = transformDateStringsToDate(input[key]);
    }
  });
  return output;
};

const dateTransform = createTransform(
  state => state,
  state => {
    return copyObject(state);
  },
);

export default [dateTransform];
