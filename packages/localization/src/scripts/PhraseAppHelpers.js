// @flow

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */ // phraseApp has rate limit of 2 concurrent requests

import fetch from '@kiwicom/fetch';

import { getVocabularies } from '../DefaultVocabulary';

const PREFIX = 'mobile.';
const { PHRASE_APP_PROJECT_ID, PHRASE_APP_TOKEN } = process.env; // should be added to ~/.bash_profile

const projectId = PHRASE_APP_PROJECT_ID != null ? PHRASE_APP_PROJECT_ID : '###';
export const translations = getVocabularies([
  'HotelsVocabulary',
  'SharedVocabulary',
  'FastTrackVocabulary',
]);
export const HttpMethod = {
  GET: 'GET',
  PATCH: 'PATCH',
  POST: 'POST',
  DELETE: 'DELETE',
};

export const _log = (message: string) => {
  console.log(`>>> ${message}`); // eslint-disable-line no-console
};

export const _fetch = async (
  urlPath: string,
  parameters?: any,
  method?: string,
  extraHeaders?: Object,
) => {
  const result = await fetch(
    `https://api.phraseapp.com/api/v2/projects/${projectId}${urlPath}`,
    {
      method,
      headers: {
        'User-Agent': 'React Native App',
        Authorization: `token ${
          PHRASE_APP_TOKEN != null ? PHRASE_APP_TOKEN : '###'
        }`,
        ...(extraHeaders ?? {}),
      },
      body: parameters,
    },
  );
  if (method === HttpMethod.DELETE) {
    return result;
  }
  return result.json();
};

export const _paginate = async (
  paginateFn: Function,
  callbackFn: Function,
  page: number = 1,
) => {
  const response = await paginateFn(page);
  for (const key of response) {
    await callbackFn(key);
  }
  if (response.length > 0) {
    await _paginate(paginateFn, callbackFn, page + 1);
  }
};

// fetching existing keys from phrase app
export const findKeys = (page: number) => {
  _log(`Fetching keys on page ${page}`);
  return _fetch(`/keys?page=${page}&per_page=100`, null, HttpMethod.GET);
};

export const _removePrefix = (key: string) => {
  return key.startsWith(PREFIX) ? key.substring(PREFIX.length) : key;
};
