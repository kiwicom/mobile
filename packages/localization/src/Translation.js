// @flow

import * as React from 'react';
import { Text } from '@kiwicom/mobile-shared';

import { type TranslationKeys } from './DefaultVocabulary';
import CaseTransform, {
  type SupportedTransformationsType,
} from './transformations/CaseTransform';
import { type TranslationPromise } from './CancellableTranslation';
import { setTranslatedString, replaceValues } from './TranslationHelpers';

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

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.id && this.props.id && prevProps.id !== this.props.id) {
      //translationId changed
      this.setTranslatedString();
    }
  };

  componentWillUnmount = () => {
    if (this.translatePromise !== null) {
      this.translatePromise.cancel();
    }
  };

  setTranslatedString = () => {
    if (this.props.id) {
      setTranslatedString(
        this.props.id,
        this.translatePromise,
        translatedString => this.setState({ translatedString }),
      );
    }
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
          replaceValues(this.state.translatedString, values),
          this.props.textTransform,
        )}
      </Text>
    );
  };
}
