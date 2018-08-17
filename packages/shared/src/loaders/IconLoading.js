// @flow strict

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +size: 'large' | 'small',
|};

function IconLoading(props: Props) {
  return (
    <ActivityIndicator
      size={props.size}
      color={defaultTokens.paletteProductNormal}
    />
  );
}

IconLoading.defaultProps = {
  size: 'small',
};

export default IconLoading;
