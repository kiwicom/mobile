// @flow

import { Alert as AlertNative } from 'react-native'; // eslint-disable-line no-restricted-imports
import { translate } from '@kiwicom/rnmodules';

import { type TranslationKeys } from './DefaultVocabulary';
import {
  replaceValues,
  getTranslation as prepareTranslation,
} from './TranslationHelpers';

export type Translation =
  | {|
      +id: TranslationKeys,
      +values?: Object,
    |}
  | {|
      +passThrough: ?string | ?number,
    |};

type AlertButtons = Array<{
  text?: Translation,
  onPress?: ?() => void,
  style?: AlertButtonStyle,
}>;

type NativeAlertButtons = Array<{
  text?: string,
  onPress?: ?() => void,
  style?: AlertButtonStyle,
}>;

type AlertOptions = {
  cancelable?: ?boolean,
  onDismiss?: ?() => void,
};

type AlertButtonStyle = 'default' | 'cancel' | 'destructive';

const getTranslation = async (translation: ?Translation) => {
  if (translation && translation.id) {
    const nativeKey = `mobile.${translation.id}`;
    const translatedString = await translate(nativeKey);

    const translatedTitle = prepareTranslation(
      translatedString,
      translation.id,
    );
    if (translatedTitle) {
      return replaceValues(translatedTitle, translation.values);
    }
  } else if (translation && translation.passThrough) {
    return String(translation.passThrough);
  }
  return undefined;
};

export default class Alert extends AlertNative {
  static translatedAlert = async (
    title: ?Translation,
    message?: Translation,
    buttons?: AlertButtons,
    options?: AlertOptions,
  ) => {
    const translatedTitleWithValues = await getTranslation(title);
    const translatedMessageWithValues = await getTranslation(message);

    const translatedButtons: NativeAlertButtons = [];
    if (buttons && buttons.length >= 1) {
      await Promise.all(
        buttons.map(async button => {
          if (button && button.text) {
            const translatedButtonText = await getTranslation(button.text);
            translatedButtons.push({
              onPress: button.onPress,
              style: button.style,
              text: translatedButtonText,
            });
          }
        }),
      );
    }

    AlertNative.alert(
      translatedTitleWithValues,
      translatedMessageWithValues,
      translatedButtons,
      options,
    );
  };
}
