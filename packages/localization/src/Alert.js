// @flow

import { Alert as AlertNative } from 'react-native';

import { type TranslationKeys } from './DefaultVocabulary';
import { type TranslationPromise } from './CancellableTranslation';
import { setTranslatedString, replaceValues } from './TranslationHelpers';

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

type AlertType = 'default' | 'plain-text' | 'secure-text' | 'login-password';

const getTranslation = async (translation: ?Translation) => {
  let translatePromise: TranslationPromise | null = null;
  if (translation && translation.id) {
    const translatedTitle = await setTranslatedString(
      translation.id,
      translatePromise,
      translatedString => translatedString,
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
    type?: AlertType,
  ) => {
    const translatedTitleWithValues = await getTranslation(title);
    const translatedMessageWithValues = await getTranslation(message);

    let translatedButtons: NativeAlertButtons = [];
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
      type,
    );
  };
}
