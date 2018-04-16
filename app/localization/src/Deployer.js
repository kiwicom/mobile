// @flow
/* eslint-disable no-underscore-dangle */

import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';

import translations from './DefaultVocabulary';

// SEE: https://phraseapp.com/docs/api/v2/
// yarn babel-node app/translations/src/Deployer.js

const projectId = '###';

const HttpMethod = {
  GET: 'GET',
  PATCH: 'PATCH',
  POST: 'POST',
};

const _log = message => {
  console.log(`>>> ${message}`); // eslint-disable-line no-console
};

const _fetch = async (urlPath, parameters, method) => {
  return (await fetch(
    `https://api.phraseapp.com/api/v2/projects/${projectId}${urlPath}`,
    {
      method,
      headers: {
        'User-Agent': 'React Native App',
        Authorization: 'token ###',
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
    await _paginate(paginateFn, callbackFn, ++page);
  }
};

const _getScreenshotPath = keyName => {
  return path.join(__dirname, '../screenshots', `${keyName}.jpg`);
};

const findKeys = async page => {
  _log(`Fetching keys on page ${page}`);
  const formData = new FormData();
  return _fetch(`/keys?page=${page}&per_page=100`, formData, HttpMethod.GET);
};

const updateKey = async (keyId, keyName) => {
  _log(`Updating key ${keyName}`);
  const formData = new FormData();
  const screenshotPath = _getScreenshotPath(keyName);
  formData.append('name', keyName);
  if (fs.existsSync(screenshotPath)) {
    formData.append('screenshot', fs.createReadStream(screenshotPath));
  }
  return _fetch(`/keys/${keyId}`, formData, HttpMethod.PATCH);
};

const createKey = async keyName => {
  _log(`Creating key ${keyName}`);
  const formData = new FormData();
  const screenshotPath = _getScreenshotPath(keyName);
  formData.append('name', keyName);
  if (fs.existsSync(screenshotPath)) {
    formData.append('screenshot', fs.createReadStream(screenshotPath));
  }
  return _fetch(`/keys`, formData, HttpMethod.POST);
};

const createTranslation = async (keyId, translationString) => {
  _log(`Creating translation for key ${keyId}`);
  const formData = new FormData();
  formData.append('locale_id', 'en'); // EN is the main language maintained automatically
  formData.append('key_id', keyId);
  formData.append('content', 'mobile.' + translationString);
  return _fetch(`/translations`, formData, HttpMethod.POST);
};

(async () => {
  const updatedKeysPool = {};

  // 1) iterate all known keys and update them
  await _paginate(findKeys, async key => {
    updatedKeysPool[key.name] = true;
    await updateKey(key.id, key.name);
  });

  // 2) try to deploy all keys (this will add missing keys)
  for (const key of Object.keys(translations)) {
    if (updatedKeysPool[key] !== true) {
      await createKey(key);
    }
  }

  // 3) deploy translations
  await _paginate(
    findKeys,
    async key => await createTranslation(key.id, translations[key.name]),
  );

  // 4) TODO: delete old keys (WARNING! there may be other keys not related to this package)

  // 5) TODO: check old outdated screenshots (print warning for missing screenshots)
})();
