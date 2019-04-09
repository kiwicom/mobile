// @flow

import * as React from 'react';
import { Text, StyleSheet } from '@kiwicom/universal-components';
import { translate } from '@kiwicom/rnmodules';

import vocabulary, { type TranslationKeys } from './DefaultVocabulary';
import CaseTransform, {
  type SupportedTransformationsType,
} from './transformations/CaseTransform';
import { getTranslation, replaceValues } from './TranslationHelpers';

// Preload translations
Object.keys(vocabulary).forEach(async key => {
  const nativeKey = 'mobile.' + key;

  const translatedString = await translate(nativeKey);
  if (translatedString != null) {
    vocabulary[key] = getTranslation(translatedString, key);
  }
});

type CommonProps = {|
  testID?: string,
  textTransform?: SupportedTransformationsType,
|};

type Props =
  | {|
      id: TranslationKeys,
      values?: Object,
      ...CommonProps,
    |}
  | {|
      passThrough: ?string | ?number, // may be undefined because of IDX output
      ...CommonProps,
    |};

/**
 * Regular translation using registered keys:
 *
 * ```js
 * <Translation id="SingleHotel.Rating.Stars" />
 * ```
 *
 * So called "pass through" translation (this props is not being translated
 * but passed through the component).
 *
 * ```js
 * <Translation passThrough="★★★★★" />
 * ```
 *
 * It's possible to apply text transformations in both cases:
 *
 * ```js
 * <Translation passThrough="★★★★★" textTransform="uppercase" />
 * <Translation id="SingleHotel.Rating.Stars" textTransform="uppercase" />
 * ```
 */
export default class Translation extends React.Component<Props> {
  // use this property to highlight translations for screenshoting or debugging
  highlightTranslations = false;

  render() {
    const containerStyle = this.highlightTranslations
      ? {
          backgroundColor: this.props.id ? 'orange' : 'pink',
        }
      : undefined;

    const style = [containerStyle, styles.text];
    if (this.props.id === undefined) {
      // ID prop is missing so let's assume it's "pass through" translation
      // (property passThrough may be undefined)
      if (this.props.passThrough == null) {
        return null;
      }
      return (
        <Text style={style}>
          {CaseTransform(
            String(this.props.passThrough),
            this.props.textTransform,
          )}
        </Text>
      );
    }

    const values = this.props.values || {};
    return (
      <Text style={style}>
        {CaseTransform(
          replaceValues(vocabulary[this.props.id], values),
          this.props.textTransform,
        )}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    ios: {
      fontFamily: 'CircularPro-Book',
    },
    android: {
      fontFamily: 'Roboto',
    },
  },
});
