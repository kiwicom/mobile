// @flow strict

/* eslint-disable no-underscore-dangle */

import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';

import { getVocabularies } from './DefaultVocabulary';

// SEE: https://phraseapp.com/docs/api/v2/
// yarn deploy-translations
const PREFIX = 'mobile.';

const { PHRASE_APP_PROJECT_ID, PHRASE_APP_TOKEN } = process.env; // should be added to ~/.bash_profile

const projectId = PHRASE_APP_PROJECT_ID || '###';
const translations = getVocabularies(['HotelsVocabulary', 'SharedVocabulary']); // Add packages here, this is so we don't accidently deploy MMB translations yet

const HttpMethod = {
  GET: 'GET',
  PATCH: 'PATCH',
  POST: 'POST',
};

const missingScreenshots: string[] = [];

const _log = message => {
  console.log(`>>> ${message}`); // eslint-disable-line no-console
};

const _removePrefix = (key: string) => {
  return key.startsWith(PREFIX) ? key.substring(PREFIX.length) : key;
};

const _addPrefix = (key: string) => {
  return key.startsWith(PREFIX) ? key : `mobile.${key}`;
};

const _fetch = async (urlPath, parameters, method) => {
  return (await fetch(
    `https://api.phraseapp.com/api/v2/projects/${projectId}${urlPath}`,
    {
      method,
      headers: {
        'User-Agent': 'React Native App',
        Authorization: `token ${PHRASE_APP_TOKEN || '###'}`,
      },
      body: parameters,
    },
  )).json();
};

const _paginate = async (paginateFn, callbackFn, page = 1) => {
  const response = await paginateFn(page);
  for (const key of response) {
    await callbackFn(key);
  }
  if (response.length > 0) {
    await _paginate(paginateFn, callbackFn, page + 1);
  }
};

// keyName could be both keys fetched from server and keyName passed from vocabulary
const _getScreenshotPath = (keyName: string) => {
  return path.join(
    __dirname,
    '../screenshots',
    `${_removePrefix(keyName)}.jpg`,
  );
};

// fetching existing keys from phrase app
const findKeys = async page => {
  _log(`Fetching keys on page ${page}`);
  return _fetch(`/keys?page=${page}&per_page=100`, null, HttpMethod.GET);
};

const updateKey = async (keyId, keyName) => {
  _log(`Updating key ${keyName}`);
  const unPrefixedKey = _removePrefix(keyName);
  if (translations[unPrefixedKey] === undefined) {
    // Not our translation
    _log('not our translation');
    return;
  }
  const formData = new FormData();
  const screenshotPath = _getScreenshotPath(keyName);
  formData.append('name', keyName);
  formData.append('content', translations[unPrefixedKey]);
  if (fs.existsSync(screenshotPath)) {
    formData.append('screenshot', fs.createReadStream(screenshotPath));
  } else {
    missingScreenshots.push(unPrefixedKey);
  }
  return _fetch(`/keys/${keyId}`, formData, HttpMethod.PATCH);
};

const createKey = async keyName => {
  _log(`Creating key ${keyName}`);
  const formData = new FormData();
  const screenshotPath = _getScreenshotPath(keyName);
  formData.append('name', _addPrefix(keyName));
  if (fs.existsSync(screenshotPath)) {
    formData.append('screenshot', fs.createReadStream(screenshotPath));
  } else {
    missingScreenshots.push(keyName);
  }
  return _fetch(`/keys`, formData, HttpMethod.POST);
};

const createTranslation = async (keyId, translationString) => {
  _log(`Creating translation for key ${keyId} = ${translationString}`);
  const formData = new FormData();
  formData.append('locale_id', 'en-GB'); // en-GB is the main language maintained automatically
  formData.append('key_id', keyId);
  formData.append('content', translationString);
  return _fetch(`/translations`, formData, HttpMethod.POST);
};

(async () => {
  const updatedKeysPool = {};

  // 1) iterate all known keys and update them
  await _paginate(findKeys, async key => {
    // key.name should be with prefix
    updatedKeysPool[key.name] = true;
    await updateKey(key.id, key.name);
  });

  // 2) try to deploy all keys (this will add missing keys)
  for (const key of Object.keys(translations)) {
    // key is without prefix
    if (updatedKeysPool[_addPrefix(key)] !== true) {
      await createKey(key);
    }
  }

  // 3) deploy translations
  await _paginate(findKeys, async key => {
    // key.name should be with prefix
    const translationKey = _removePrefix(key.name);
    if (
      updatedKeysPool[key.name] !== true && // key is added and we already passed it through update
      translations[translationKey] !== undefined // this is not our translation
    ) {
      await createTranslation(key.id, translations[translationKey]);
    }
  });

  // 4) TODO: delete old keys (WARNING! there may be other keys not related to this package)

  // 5) Print warning for missing screenshots
  missingScreenshots.forEach(item => _log(`missing screenshot for ${item}`));
})();
