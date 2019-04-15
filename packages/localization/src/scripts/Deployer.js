// @flow strict

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */ // phraseApp has rate limit of 2 concurrent requests

import fs from 'fs';
import path from 'path';
import FormData from 'form-data';
import { execSync } from 'child_process';

import {
  _log,
  _fetch,
  _paginate,
  findKeys,
  _removePrefix,
  HttpMethod,
  translations,
} from './PhraseAppHelpers';

// SEE: https://phraseapp.com/docs/api/v2/
// yarn deploy-translations
const PREFIX = 'mobile.';

const foldersToScan = ['app', 'packages']; // Add more folders to scan for unused translation keys

const missingScreenshots: string[] = [];

const _addPrefix = (key: string) => {
  return key.startsWith(PREFIX) ? key : `mobile.${key}`;
};

// keyName could be both keys fetched from server and keyName passed from vocabulary
const _getScreenshotPath = (keyName: string) => {
  return path.join(
    __dirname,
    '..',
    '..',
    'screenshots',
    `${_removePrefix(keyName)}.jpg`,
  );
};

const findKeyIdByName = (keyName: string) => page => {
  _log(`Fetching the id of key ${keyName} on page ${page}`);
  return _fetch(
    `/keys?page=${page}&per_page=100&q=name:${_addPrefix(keyName)}`,
    null,
    HttpMethod.GET,
  );
};

const updateKey = async (keyId, keyName) => {
  _log(`Updating key ${keyName}`);
  const unPrefixedKey = _removePrefix(keyName);
  if (translations[unPrefixedKey] === undefined) {
    // Not our translation
    _log('not our translation');
    return null;
  }
  const formData = new FormData();
  const screenshotPath = _getScreenshotPath(keyName);
  formData.append('name', keyName);

  if (fs.existsSync(screenshotPath)) {
    formData.append('screenshot', fs.createReadStream(screenshotPath));
  } else {
    missingScreenshots.push(unPrefixedKey);
  }
  await _fetch(`/keys/${keyId}`, formData, HttpMethod.PATCH);
  return updateTranslation(keyId, unPrefixedKey);
};

const updateTranslation = async (keyId: string, unPrefixedKey: string) => {
  const serverTranslations = await _fetch(`/keys/${keyId}/translations`);
  const defaultLocale = serverTranslations.find(
    translation => translation.locale.code === 'en-GB', // Our default locale
  );

  if (defaultLocale == null) {
    _log(`No translation found for key ${keyId}`);
    return null;
  }
  if (translations[unPrefixedKey] !== defaultLocale.content) {
    _log(`updating content for ${unPrefixedKey}`);

    return _fetch(
      `/translations/${defaultLocale.id}`,
      JSON.stringify({ content: translations[unPrefixedKey] }),
      HttpMethod.PATCH,
      { 'Content-Type': 'application/json' },
    );
  }
  return null;
};

const createKey = keyName => {
  _log(`Creating key ${keyName}`);
  const formData = new FormData();
  const screenshotPath = _getScreenshotPath(keyName);
  formData.append('name', _addPrefix(keyName));
  if (fs.existsSync(screenshotPath)) {
    formData.append('screenshot', fs.createReadStream(screenshotPath));
  } else {
    missingScreenshots.push(keyName);
  }
  return _fetch('/keys', formData, HttpMethod.POST);
};

const createTranslation = (keyId, translationString) => {
  _log(`Creating translation for key ${keyId} = ${translationString}`);
  const formData = new FormData();
  formData.append('locale_id', 'en-GB'); // en-GB is the main language maintained automatically
  formData.append('key_id', keyId);
  formData.append('content', translationString);
  return _fetch('/translations', formData, HttpMethod.POST);
};

const deleteKey = (keyId, keyName) => {
  if (keyId != null && keyId !== '') {
    _log(`Deleting key ${keyName} with id ${keyId}`);
    return _fetch(`/keys/${keyId}`, null, HttpMethod.DELETE);
  }
  return Promise.resolve(null);
};

const findNumberOfOccurrences = (translationKey: string) =>
  Number(
    execSync(
      `grep -R  "\\(\\"\\|\\'\\)\\(${translationKey}\\)\\(\\"\\|\\'\\)" ${foldersToScan.join(
        ' ',
      )} | wc -l`,
    )
      .toString()
      .trim(),
  );

(async () => {
  const updatedKeysPool = {};
  const unusedKeys: string[] = [];

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

  // 4) delete old keys (WARNING! there may be other keys not related to this package)
  await Promise.all(
    Object.keys(translations).map(async translationKey => {
      const numberOfOccurrences = findNumberOfOccurrences(translationKey);

      // numberOfOccurrences === 1 means it was only found in packages/localization
      if (numberOfOccurrences === 1) {
        _log(`Key '${translationKey}': Not found in the codebase`);

        await _paginate(findKeyIdByName(translationKey), async key => {
          await deleteKey(key.id, key.name);
        });

        unusedKeys.push(_removePrefix(translationKey));
      }
    }),
  );

  // 5) Print warning for missing screenshots and unused keys
  _log('--------------------');
  _log('Missing Screenshots');
  _log('--------------------');
  _log('');
  missingScreenshots.forEach(item => _log(`missing screenshot for ${item}`));
  _log('');
  _log('');
  _log('--------------------');
  _log('Unused Keys');
  _log('--------------------');
  _log('');
  unusedKeys.forEach(item => _log(`${item}`));
})();
