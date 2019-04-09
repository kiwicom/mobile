// @flow

import * as React from 'react';
import {
  CaseTransform,
  getTranslation,
  type SupportedTransformationsType,
  type TranslationKeysType,
} from '@kiwicom/mobile-localization';

import Text from './Text';

type CommonProps = {|
  testID?: string,
  textTransform?: SupportedTransformationsType,
|};

type Props =
  | {|
      id: TranslationKeysType,
      values?: Object,
      ...CommonProps,
    |}
  | {|
      passThrough: ?string | ?number, // may be undefined because of optional chaining
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

// use this property to highlight translations for screenshoting or debugging
const highlightTranslations = false;
export default function Translation(props: Props) {
  const containerStyle = highlightTranslations
    ? {
        backgroundColor: props.id ? 'orange' : 'pink',
      }
    : undefined;
  if (props.id === undefined && props.passThrough != null) {
    return (
      <Text style={containerStyle}>
        {/* $FlowExpectedError: we do not allow to use 'string' in the 'Text' components but translations are exceptions. */}
        {CaseTransform(String(props.passThrough), props.textTransform)}
      </Text>
    );
  } else if (props.id === undefined) {
    return null;
  }

  const values = props.values || {};
  return (
    <Text style={containerStyle}>
      {/* $FlowExpectedError: we do not allow to use 'string' in the 'Text' components but translations are exceptions. */}
      {CaseTransform(getTranslation(props.id, values), props.textTransform)}
    </Text>
  );
}
