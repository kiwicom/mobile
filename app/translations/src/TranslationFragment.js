// @flow

import * as React from 'react';

import type { SupportedTransformationsType } from './transformations/CaseTransform';

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
  textTransform?: SupportedTransformationsType,
|}> {
  render = () => {
    if (this.props.children === undefined) {
      throw new Error("'TranslationFragment' cannot be used without children.");
    }
    return React.Children.map(this.props.children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ...this.props,
          children: null,
        });
      }
      return child;
    });
  };
}
