// @flow strict

import * as React from 'react';
import {
  Icon as UniversalIcon,
  type StylePropType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +name: string,
  +size?: 'small' | 'medium' | 'large',
  +color?: string,
  +style?: StylePropType,
  +fontSize?: number,
|};

export default class Icon extends React.Component<Props> {
  static defaultProps = {
    color: defaultTokens.colorIconSecondary,
  };

  getCustomFontSizeStyle = () => {
    // Universal-components adds these values based on size. We have some custom sizes in mobile
    // So we have to override these values
    const { fontSize } = this.props;

    if (fontSize == null) {
      return null;
    }

    return {
      fontSize,
      height: fontSize,
      width: fontSize,
      lineHeight: fontSize,
    };
  };

  render() {
    const { style, ...rest } = this.props;
    return (
      <>
        {/* $FlowExpectedError: string is good enough for now */}
        <UniversalIcon
          {...rest}
          style={[style, this.getCustomFontSizeStyle()]}
        />
      </>
    );
  }
}
