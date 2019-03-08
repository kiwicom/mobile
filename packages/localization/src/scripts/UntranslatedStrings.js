// @flow strict

import fs from 'fs';
import os from 'os';
import path from 'path';

import {
  _fetch,
  _paginate,
  findKeys,
  _log,
  _removePrefix,
  translations as localTranslations,
} from './PhraseAppHelpers';

const untranslatedKeys = [];

const checkTranslations = async (keyId, keyName) => {
  const unPrefixedKey = _removePrefix(keyName);
  _log(keyName);
  if (localTranslations[unPrefixedKey] === undefined) {
    // Not our translation
    _log('not our translation');
    return;
  }
  const translations = await _fetch(`/keys/${keyId}/translations`);
  _log(`translations found=${translations.length}`);
  if (translations.length < 2) {
    // We have uploaded for en-GB so there should be one
    _log('pushing key');
    untranslatedKeys.push(keyName);
  }
};

(async () => {
  await _paginate(findKeys, async key => {
    // key.name should be with prefix
    await checkTranslations(key.id, key.name);
  });

  fs.writeFileSync(
    path.join(__dirname, '../../../../', 'untranslatedStrings.txt'), // writing results to project root
    untranslatedKeys.join(os.EOL),
  );
})();
