// @flow

import * as React from 'react';
import { translate } from '@kiwicom/rnmodules';
import RNTooltips from 'react-native-tooltips';
import isEqual from 'react-fast-compare';

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

type Props = {|
  ...React.ElementProps<typeof RNTooltips>,
  text: Translation,
|};

type State = {|
  translatedText: string,
|};

export default class Tooltips extends React.Component<Props, State> {
  state = {
    translatedText: '',
  };

  componentDidMount() {
    this.translateText();
  }

  componentDidUpdate(prevProps: Props) {
    if (!isEqual(this.props.text, prevProps.text)) {
      this.translateText();
    }
  }

  translateText = async () => {
    const translatedText = await getTranslation(this.props.text);
    this.setState({ translatedText });
  };

  render() {
    return <RNTooltips {...this.props} text={this.state.translatedText} />;
  }
}
