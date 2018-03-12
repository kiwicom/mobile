// @flow

import * as React from 'react';

/**
 * Allows to concat multiple translations because it's not possible to nest
 * them. Usage:
 *
 * ```js
 * <TranslationFragment>
 *   <DummyTranslation id="★★★★★" />
 *   <Translation id="SingleHotel.Rating.Stars" />
 * </TranslationFragment>
 * ```
 *
 * `TranslationFragment` can later be used in place of dummy or normal translation.
 */
export default class TranslationFragment extends React.Component<{|
  children: React.Node,
|}> {
  render = () => this.props.children;
}
