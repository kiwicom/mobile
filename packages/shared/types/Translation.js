// @flow

import * as React from 'react';

import Translation from '../src/Translation';
import TranslationFragment from '../src/TranslationFragment';

export type TranslationType =
  | React.Element<typeof Translation>
  | React.Element<typeof TranslationFragment>;
