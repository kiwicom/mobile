// @flow

import * as React from 'react';

import Translation from './Translation';
import type { SupportedTransformationsType } from './transformations/CaseTransform';

/**
 * Allows to concat multiple translations because it's not possible to nest
 * them. Usage:
 *
 * ```js
 * <TranslationFragment>
 *   <Translation passThrough="★★★★★" />
 *   <Translation id="SingleHotel.Rating.Stars" />
 * </TranslationFragment>
 * ```
 *
 * `TranslationFragment` can later be used in place of dummy or normal
 * translation. This fragment can have additional properties. These props
 * are being propagated to the translations children only:
 *
 * ```js
 * <TranslationFragment textTransform="uppercase">
 *   <Translation passThrough="this is going to be uppercased" />
 *   <Text>this is going to stay lowercased</Text>
 * </TranslationFragment>
 * ```
 *
 * `TranslationFragment` components is possible to nest.
 */
export default class TranslationFragment extends React.Component<{|
  children: React.Node,
  textTransform?: SupportedTransformationsType,
|}> {
  isTranslationComponent = (child: ?React.Element<any>): boolean => {
    if (!child) {
      return false;
    }
    return child.type === Translation || child.type === TranslationFragment;
  };

  render = () => {
    if (this.props.children === undefined) {
      throw new Error("'TranslationFragment' cannot be used without children.");
    }

    return React.Children.map(this.props.children, child => {
      // Additional fragments props are going to be applied also on translations
      // children. Other children components are returned "as is".
      if (!this.isTranslationComponent(child)) {
        return child;
      }

      if (this.props.textTransform === undefined) {
        return child;
      }

      return React.cloneElement(child, {
        textTransform: child.props.textTransform || this.props.textTransform,
      });
    });
  };
}
