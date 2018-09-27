// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from './PlatformStyleSheet';
import TextIcon from './icons/TextIcon';

type Props = {|
  size?: number,
  color?: string,
  code?: string,
|};

export default class PositionMarker extends React.Component<Props> {
  createStyles = (
    size: number = 25,
    color: string = defaultTokens.paletteProductNormal,
  ) =>
    StyleSheet.create({
      icon: {
        color: color,
        fontSize: size,
        ios: {
          position: 'absolute',
          left: -size / 2,
          top: -size,
        },
        android: {},
      },
    });

  render() {
    const { size, code, color } = this.props;

    const styles = this.createStyles(size, color);
    return <TextIcon code={code || '$'} style={styles.icon} orbit={true} />;
  }
}
