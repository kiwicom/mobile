// @flow

import * as React from 'react';
import { NativeModules } from 'react-native';
import { Text } from '@kiwicom/react-native-app-shared';

import DefaultVocabulary, { type TranslationKeys } from './DefaultVocabulary';

type SupportedTransformationsType = 'lowercase' | 'uppercase';

type Props = {|
  id: TranslationKeys,
  values?: Object,
  textTransform?: SupportedTransformationsType,
|};

export default class Translation extends React.Component<Props> {
  // use this property to highlight translations for screenshoting or debugging
  highlightTranslations = false;

  transformText = (
    text: string,
    transformation?: SupportedTransformationsType,
  ): string => {
    switch (transformation) {
      case 'uppercase':
        return text.toUpperCase();
      case 'lowercase':
        return text.toLowerCase();
      default:
        return text;
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
    const key = this.props.id;
    let translatedString = NativeModules.RNTranslationManager.translate(key);

    if (translatedString === key) {
      // fallback to our dummy vocabulary because native code didn't provide translation
      translatedString = DefaultVocabulary[key];
    }

    if (translatedString === undefined) {
      // Everything failed - native translation even our fallback. This usually
      // means we are using key that does not exist. In this case the only thing
      // we can actually do is to use original key as a text.
      translatedString = key;
    }

    return (
      <Text
        style={
          this.highlightTranslations
            ? {
                backgroundColor: 'orange',
              }
            : undefined
        }
      >
        {this.transformText(
          this.replaceValues(translatedString, this.props.values),
          this.props.textTransform,
        )}
      </Text>
    );
  };
}
