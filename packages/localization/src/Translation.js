// @flow

import * as React from 'react';
import { Text } from '@kiwicom/mobile-shared';

import DefaultVocabulary, { type TranslationKeys } from './DefaultVocabulary';
import CaseTransform, {
  type SupportedTransformationsType,
} from './transformations/CaseTransform';
import {
  cancellableTranslation,
  type TranslationPromise,
} from './CancellableTranslation';

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

type State = {|
  translatedString: string,
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
export default class Translation extends React.Component<Props, State> {
  // use this property to highlight translations for screenshoting or debugging
  highlightTranslations = false;
  translatePromise: TranslationPromise | null = null;
  state = {
    translatedString: '',
  };

  componentDidMount = () => {
    this.setTranslatedString();
  };

  componentWillUnmount = () => {
    if (this.translatePromise !== null) {
      this.translatePromise.cancel();
    }
  };

  setTranslatedString = async () => {
    if (this.props.id) {
      const key = this.props.id;
      const nativeKey = 'mobile.' + key;
      try {
        this.translatePromise = cancellableTranslation(nativeKey);
        let translatedString = await this.translatePromise.promise;
        if (translatedString === nativeKey) {
          // fallback to our dummy vocabulary because native code didn't provide translation
          translatedString = DefaultVocabulary[key];
        }

        if (translatedString === undefined) {
          // Everything failed - native translation even our fallback. This usually
          // means we are using key that does not exist. In this case the only thing
          // we can actually do is to use original key as a text.
          translatedString = key;
        }
        this.setState({ translatedString });
        this.translatePromise = null;
      } catch (err) {
        this.translatePromise = null;
      }
    }
  };

  replaceValues = (text: string, values?: Object): string => {
    const VARIABLE_REGEX = /__([0-9]+_)?([a-zA-Z-_]+)__/g;
    return text.replace(
      VARIABLE_REGEX,
      (match, variableIndex, variableName) => {
        // 'variableIndex' is currently being ignored (we don't need it)
        const value = values && values[variableName];
        return value !== undefined ? value : '?';
      },
    );
  };

  render = () => {
    const containerStyle = this.highlightTranslations
      ? {
          backgroundColor: this.props.id ? 'orange' : 'pink',
        }
      : undefined;

    if (this.props.id === undefined) {
      // ID prop is missing so let's assume it's "pass through" translation
      // (property passThrough may be undefined)
      return (
        <Text style={containerStyle}>
          {/* $FlowExpectedError: we do not allow to use 'string' in the 'Text' components but translations are exceptions. */}
          {CaseTransform(
            String(this.props.passThrough),
            this.props.textTransform,
          )}
        </Text>
      );
    }

    const values = this.props.values || {};
    return (
      <Text style={containerStyle}>
        {/* $FlowExpectedError: we do not allow to use 'string' in the 'Text' components but translations are exceptions. */}
        {CaseTransform(
          this.replaceValues(this.state.translatedString, values),
          this.props.textTransform,
        )}
      </Text>
    );
  };
}
