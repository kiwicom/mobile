// @flow strict

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import UniversalIcon from './UniversalIcon';

type Props = {|
  +name: string,
  +size?: 'small' | 'medium' | 'large',
  +color?: string,
  +style?: $FlowFixMe,
  +fontSize?: number,
  +testID?: string,
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
    return <UniversalIcon {...rest} style={[style, this.getCustomFontSizeStyle()]} />;
  }
}
