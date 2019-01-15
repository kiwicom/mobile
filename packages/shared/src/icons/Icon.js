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
|};

export default class Icon extends React.Component<Props> {
  static defaultProps = {
    color: defaultTokens.colorIconSecondary,
  };

  render() {
    return <UniversalIcon {...this.props} />;
  }
}
