// @flow

import moment from 'moment';

export default (input: ?Date): ?string =>
  input && moment(input).format('YYYY-MM-DD');
