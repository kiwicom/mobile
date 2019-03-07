// @flow

import { callApi } from '@kiwicom/mobile-networking';

import requestConfig from '../config/requestConfig';

/**
 * Create request object with proper configuration.
 *
 * @param {string} token JSON Web Token
 */
const createRequester = (token: string) => {
  return callApi({
    ...requestConfig,
    headers: {
      'KW-User-Token': token,
    },
  });
};

export default createRequester;
