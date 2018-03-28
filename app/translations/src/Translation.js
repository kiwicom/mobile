// @flow

import * as React from 'react';
import { NativeModules } from 'react-native';
import { Text } from '@kiwicom/react-native-app-shared';

import DefaultVocabulary, { type TranslationKeys } from './DefaultVocabulary';
import CaseTransform, {
  type SupportedTransformationsType,
} from './transformations/CaseTransform';

type Props = {|
  id: TranslationKeys,
  values?: Object,
  textTransform?: SupportedTransformationsType,
|};

export default class Translation extends React.Component<Props> {
  // use this property to highlight translations for screenshoting or debugging
  highlightTranslations = false;

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
        {/*
          $FlowExpectedError: we do not allow to use 'string' in the 'Text'
          components but translations are exceptions.
        */}
        {CaseTransform(
          this.replaceValues(translatedString, this.props.values),
          this.props.textTransform,
        )}
      </Text>
    );
  };
}
