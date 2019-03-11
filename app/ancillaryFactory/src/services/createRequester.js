// @flow

import fetch from '@kiwicom/fetch';

import requestConfig from '../config/requestConfig';

/**
 * Create request object with proper configuration.
 *
 * @param {string} token JSON Web Token
 */
const createRequester = (token: string) => async (endpoint: string) => {
  const url = `${requestConfig.uri}/${endpoint}`;
  return fetch(url, {
    headers: {
      'KW-User-Token': token,
    },
  });
};

export default createRequester;
