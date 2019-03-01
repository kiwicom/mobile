// @flow strict

import axios from 'axios';

export type Config = {|
  hostname: string,
  headers?: {},
|};

export type Options = {|
  headers?: {},
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
|};

const callApi = (config: Config) => async (
  path: string,
  options: Options = {
    headers: {},
    method: 'GET',
  },
  body?: {},
) => {
  const { hostname, headers } = config;

  const apiRequest = {
    url: `${hostname}/${path}`,
    method: options.method,
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
    body,
    json: true,
  };

  return axios(apiRequest);
};

export default callApi;
